import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, collection, getDocs, collectionGroup, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration (New Keys)
const firebaseConfig = {
  apiKey: "AIzaSyC7JpYdMMyigeOC8eJEOQJRS5QnUi7S0R0",
  authDomain: "never-made.firebaseapp.com",
  projectId: "never-made",
  storageBucket: "never-made.firebasestorage.app",
  messagingSenderId: "489232796124",
  appId: "1:489232796124:web:d3efce2b111f37ec66e719",
  measurementId: "G-6NNXGTSL81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Expose to window for other scripts
window.auth = auth;
window.db = db;
window.Firestore = { setDoc, doc, getDoc, updateDoc, arrayUnion, collection, getDocs, collectionGroup, query, orderBy };

// 🔐 Signup function
window.signup = async function (email, password, firstName, lastName) {
    if (!email || !password || !firstName) {
        alert('Please fill all required fields');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a fresh profile for every new user
        try {
            await setDoc(doc(db, 'users', user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: '',
                age: '',
                gender: 'Prefer not to say',
                primaryAddress: '',
                createdAt: new Date().toISOString()
            });

            alert('🎉 Account created successfully! Welcome to the Collective.');
            window.location.href = 'index.html';
        } catch (dbError) {
            console.error('Firestore Error:', dbError);
            // Handle permission-denied specifically
            if (dbError.code === 'permission-denied' || dbError.message.includes('permissions')) {
                alert('Signup partially failed: Missing Firestore permissions. Please ensure your Firestore Security Rules allow writes to the "users" collection.');
            } else {
                alert('Profile creation failed: ' + dbError.message);
            }
            // User is still authenticated in Auth, but profile creation failed.
            // We redirect anyway as onAuthStateChanged will handle the missing profile.
            window.location.href = 'index.html';
        }
    } catch (authError) {
        switch (authError.code) {
            case 'auth/email-already-in-use':
                alert('Your account is already registered! Please log in instead.');
                break;
            case 'auth/weak-password':
                alert('Password must be at least 6 characters.');
                break;
            case 'auth/invalid-email':
                alert('Please enter a valid email address.');
                break;
            default:
                // If it's a general permission error at the auth stage, clarify it
                if (authError.message.includes('permissions')) {
                    alert('Signup failed: Missing or insufficient permissions. This may indicate Firestore rules are blocking initial setup or Auth is misconfigured.');
                } else {
                    alert('Signup failed: ' + authError.message);
                }
        }
    }
};

// 🔑 Login function
window.login = function (email, password, redirectUrl = 'index.html') {
    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful ✅");
            if (redirectUrl) window.location.href = redirectUrl; 
        })
        .catch((error) => {
            alert(error.message);
        });
};

// 🚪 Logout function
window.logout = function () {
    auth.signOut().then(() => {
        alert("Logged out successfully");
        window.location.href = "index.html";
    });
};

// 📝 Update Profile function
window.updateUserProfile = async function (data) {
    try {
        // Update Alpine store immediately (reactive UI update)
        const authStore = window.Alpine.store('auth');
        const updatedProfile = { ...authStore.profile, ...data };
        authStore.profile = updatedProfile;

        // Save to localStorage for persistence across pages
        localStorage.setItem('nm-profile', JSON.stringify(updatedProfile));

        // Sync to Firestore — setDoc+merge works for both new and existing docs
        if (auth.currentUser) {
            await setDoc(doc(db, 'users', auth.currentUser.uid), data, { merge: true });
        }
        // Toast is handled by profile.html
    } catch (error) {
        console.error('Save error:', error);
        alert('Error saving profile. Please try again.');
    }
};

// Monitor Auth State
onAuthStateChanged(auth, async (user) => {
    if (!window.Alpine) return;

    const authStore = window.Alpine.store('auth');

    if (user) {
        authStore.user = user;

        try {
            // Load this user's profile from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                authStore.profile = userData;
                localStorage.setItem('nm-profile', JSON.stringify(userData));
            } else {
                console.warn('Profile doc missing for user:', user.uid);
                // Handle case where auth exists but profile doc was never created (permission errors)
                authStore.profile = {
                    email: user.email,
                    firstName: 'User',
                    lastName: '',
                    isIncomplete: true
                };
            }
        } catch (err) {
            console.error('Error fetching profile:', err);
        }
    } else {
        // User logged out — clear everything
        authStore.user = null;
        authStore.profile = null;
        localStorage.removeItem('nm-profile');
    }

    authStore.loading = false;
});
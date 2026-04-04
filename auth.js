import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
window.Firestore = { setDoc, doc, getDoc, updateDoc, arrayUnion };

// 🔐 Signup function
window.signup = function (email, password, firstName, lastName) {
    if (!email || !password || !firstName) {
        alert("Please fill all required fields");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            
            // Save additional user data to Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                createdAt: new Date().toISOString()
            });

            alert("Signup successful 🎉 Profile created!");
            window.location.href = "index.html"; // Redirection for the new home location
        })
        .catch((error) => {
            alert(error.message);
        });
};

// 🔑 Login function
window.login = function (email, password) {
    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful ✅");
            window.location.href = "index.html"; 
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
        // Update local session immediately
        const authStore = window.Alpine.store('auth');
        const updatedProfile = { ...authStore.profile, ...data };
        authStore.profile = updatedProfile;
        
        // Persist to localStorage
        localStorage.setItem('nm-profile', JSON.stringify(updatedProfile));

        // Sync with Firestore if logged in
        if (auth.currentUser) {
            const userRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(userRef, data);
        }

        alert("Profile updated successfully! ✨");
    } catch (error) {
        console.error("Update error:", error);
        alert("Error updating profile.");
    }
};

// Monitor Auth State
onAuthStateChanged(auth, async (user) => {
    // Check if Alpine store exists (it might not on direct load of this module before store is ready)
    if (!window.Alpine) {
        console.log("Alpine not ready, auth sync deferred");
        return;
    }

    const authStore = window.Alpine.store('auth');
    if (user) {
        authStore.user = user;
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            authStore.profile = userData;
            // Sync Firestore data to localStorage on login
            localStorage.setItem('nm-profile', JSON.stringify(userData));
        }
    } else {
        authStore.user = null;
        // Don't necessarily wipe profile, keep it for guest experience if they edited it
        // but for security/consistency, usually we might want to clear it
        // Depending on requirements. For now, let's keep it if they just logged out but session lasts.
    }
    authStore.loading = false;
});
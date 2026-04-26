// supabase-js CDN integration
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// ⚠️ UPDATE THESE WITH YOUR SUPABASE PROJECT DETAILS
const supabaseUrl = 'https://bpbcvhqkcyekdxmoklgv.supabase.co';
const supabaseAnonKey = 'sb_publishable_uQC3cKkWvegcPty90dk5mg_bjdbgYDS';

// Initialize Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Expose to window for other scripts
window.supabase = supabase;

// 🔐 Signup function
window.signup = async function (email, password, firstName, lastName) {
    // If called without arguments (e.g., from an onclick), try to read from common DOM IDs
    if (!email) email = document.getElementById('signupEmail')?.value || document.getElementById('signup_email')?.value;
    if (!password) password = document.getElementById('signupPassword')?.value || document.getElementById('signup_password')?.value;
    if (!firstName) firstName = document.getElementById('signupFname')?.value || document.getElementById('signup_fname')?.value;
    if (!lastName) lastName = document.getElementById('signupLname')?.value || document.getElementById('signup_lname')?.value;

    if (!email || !password || !firstName) {
        alert('Please fill all required fields');
        return;
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName
                }
            }
        });

        if (error) throw error;

        const user = data.user;
        if (user) {
            // NOTE: We now rely on a Supabase Database Trigger to create the profile 
            // automatically on user registration to avoid any RLS (Row Level Security) conflicts.
            alert('🎉 Account created successfully! Welcome to the Collective.');
            window.location.href = 'index.html';
        }
    } catch (err) {
        console.error('Signup Error:', err);
        alert('Signup failed: ' + err.message);
    }
};

// 🔑 Login function
window.login = async function (email, password, redirectUrl = 'index.html') {
    // If called without arguments, try to read from DOM
    if (!email) email = document.getElementById('loginEmail')?.value || document.getElementById('login_email')?.value;
    if (!password) password = document.getElementById('loginPassword')?.value || document.getElementById('login_password')?.value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) throw error;

        alert("Login successful ✅");
        if (redirectUrl) window.location.href = redirectUrl;
    } catch (err) {
        console.error('Login Error:', err);
        alert('Login failed: ' + err.message);
    }
};

// ✉️ Forgot Password function
window.forgotPassword = async function (email) {
    if (!email) email = document.getElementById('forgotEmail')?.value;
    if (!email) {
        alert("Please enter your email to receive a reset link.");
        return;
    }
    try {
        // The URL point to the new password.html page
        const resetUrl = window.location.origin + window.location.pathname.replace('authpage.html', 'password.html');
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: resetUrl
        });

        if (error) throw error;
        alert("If the email is registered, a password reset link has been sent!");
    } catch (err) {
        console.error('Reset error:', err);
        alert('Error sending reset link: ' + err.message);
    }
};

// ♻️ Update Password function
window.updatePassword = async function (newPassword) {
    if (!newPassword) newPassword = document.getElementById('updatePassword')?.value;
    if (!newPassword) {
        alert("Please enter a new password.");
        return;
    }
    try {
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        if (error) throw error;
        
        alert("Password successfully updated!");
        window.location.href = "profile.html";
    } catch (err) {
        console.error('Update error:', err);
        alert('Failed to update password: ' + err.message);
    }
};

// 🚪 Logout function
window.logout = async function () {
    try {
        await supabase.auth.signOut();
    } catch (err) {
        console.warn("Server logout error:", err);
    }

    // Nuke Supabase session token manually to guarantee local logout
    Object.keys(localStorage).forEach(k => {
        if (k.startsWith('sb-') && k.endsWith('-auth-token')) {
            localStorage.removeItem(k);
        }
    });

    // Force local cleanup just in case
    localStorage.removeItem('nm-profile');
    localStorage.removeItem('nm_orders');
    localStorage.removeItem('nm_orders_v2');
    try {
        const authStore = window.Alpine && window.Alpine.store ? window.Alpine.store('auth') : null;
        if (authStore) {
            authStore.user = null;
            authStore.profile = null;
            authStore.loading = false;
        }
    } catch (e) { }

    window.location.href = "index.html";
};

// 🌐 Google Login
window.signInWithGoogle = async function() {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + '/html/index.html'
            }
        });
        if (error) throw error;
    } catch (err) {
        console.error('Google Auth Error:', err);
        alert('Google login failed: ' + err.message);
    }
};

// ✨ Magic Link Login (OTP via Email)
window.signInWithMagicLink = async function(email) {
    if (!email) {
        alert("Please enter your email for the magic link.");
        return;
    }
    try {
        const { error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.origin + '/html/index.html'
            }
        });
        if (error) throw error;
        alert("✨ Check your inbox! We've sent a magic link to establish access.");
    } catch (err) {
        console.error('Magic Link Error:', err);
        alert('Magic link failed: ' + err.message);
    }
};

// 📝 Update Profile function
window.updateUserProfile = async function (data) {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Update Alpine store immediately
        const authStore = window.Alpine.store('auth');
        const updatedProfile = { ...authStore.profile, ...data };
        authStore.profile = updatedProfile;

        // Save to localStorage
        localStorage.setItem('nm-profile', JSON.stringify(updatedProfile));

        // Sync to Supabase 'profiles' table (using upsert for maximum reliability)
        const { error } = await supabase
            .from('profiles')
            .upsert({
                id: user.id,
                email: user.email, 
                first_name: data.firstName || updatedProfile.first_name,
                last_name: data.lastName || updatedProfile.last_name,
                mobile: data.mobile || updatedProfile.mobile,
                age: data.age || updatedProfile.age,
                gender: data.gender || updatedProfile.gender,
                primary_address: data.primaryAddress || updatedProfile.primary_address,
            });

        if (error) throw error;
    } catch (error) {
        console.error('Save error:', error);
        // Silently fail if it's just a sync error, don't block the UI
    }
};

// Sync Auth State Helper
async function syncAuthState(session) {
    let authStore = null;
    try {
        authStore = window.Alpine && window.Alpine.store ? window.Alpine.store('auth') : null;
    } catch (e) { }

    // If Alpine hasn't mounted yet, wait 100ms and try again
    if (!authStore) {
        setTimeout(() => syncAuthState(session), 100);
        return;
    }

    const user = session?.user || null;

    if (user) {
        authStore.user = user;

        // 🛑 SEPARATION: Do not sync/fetch customer profiles if we are in the Admin Terminal
        if (window.IS_ADMIN_TERMINAL) {
            authStore.loading = false;
            return;
        }

        try {
            // Load profile from 'profiles' table
            const { data: profile, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();

            if (profile) {
                const mappedProfile = {
                    ...profile,
                    firstName: profile.first_name,
                    lastName: profile.last_name,
                    primaryAddress: profile.primary_address
                };
                authStore.profile = mappedProfile;
                localStorage.setItem('nm-profile', JSON.stringify(mappedProfile));
            } else {
                // 🚀 AUTO-PROVISION: If profile doesn't exist, create it immediately
                console.log('Provisioning new profile for:', user.id);
                const newProfile = {
                    id: user.id,
                    email: user.email,
                    first_name: 'User',
                    last_name: ''
                };
                
                await supabase.from('profiles').upsert(newProfile);
                
                const mapped = { 
                    ...newProfile, 
                    firstName: 'User', 
                    lastName: '', 
                    primaryAddress: '' 
                };
                authStore.profile = mapped;
                localStorage.setItem('nm-profile', JSON.stringify(mapped));
                
                // Final verify: Try fetching again if we just upserted
                const { data: finalProfile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
                if (finalProfile) {
                    authStore.profile = { ...finalProfile, firstName: finalProfile.first_name, lastName: finalProfile.last_name, primaryAddress: finalProfile.primary_address };
                    localStorage.setItem('nm-profile', JSON.stringify(authStore.profile));
                }
            }
        } catch (err) {
            console.error('Profile sync error:', err);
        }
    } else {
        authStore.user = null;
        authStore.profile = null;
        localStorage.removeItem('nm-profile');
        localStorage.removeItem('nm_orders');
        localStorage.removeItem('nm_orders_v2');
    }

    authStore.loading = false;

    // Instantly swap the cart contents to match the current user/guest!
    try {
        const cartStore = window.Alpine && window.Alpine.store ? window.Alpine.store('cart') : null;
        if (cartStore && cartStore.load) {
            cartStore.load();
        }
    } catch (e) {}
}

// Monitor Auth State
supabase.auth.onAuthStateChange(async (event, session) => {
    syncAuthState(session);
});

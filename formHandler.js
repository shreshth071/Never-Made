function submitAddressForm() {
    try {
        this.addressForm = {
            ...this.addressForm,
            name: document.getElementById('addr_name')?.value,
            phone: document.getElementById('addr_phone')?.value,
            pincode: document.getElementById('addr_pincode')?.value,
            city: document.getElementById('addr_city')?.value,
            state: document.getElementById('addr_state')?.value,
            street: document.getElementById('addr_street')?.value,
        };

        if (!this.addressForm.name || !this.addressForm.phone || !this.addressForm.street) {
            alert('Please fill Name, Phone, and Address');
            return;
        }

        const newId = Date.now().toString();
        const finalAddr = { ...this.addressForm, id: newId };

        this.addresses.push(finalAddr);
        this.selectedAddressId = newId;

        this.saveAddresses();

        // 🔗 Supabase Sync: Save primary address if logged in
        if (window.supabase) {
            window.supabase.auth.getUser().then(({ data: { user } }) => {
                if (user) {
                    window.supabase
                        .from('profiles')
                        .update({ primary_address: finalAddr.street + ", " + finalAddr.city + ", " + finalAddr.state + " - " + finalAddr.pincode })
                        .eq('id', user.id)
                        .then(() => {
                            console.log("Address synced to Supabase ✅");
                        })
                        .catch(err => {
                            console.error("Supabase sync error:", err);
                        });
                }
            });
        }

        this.showAddressForm = false;

        this.$nextTick(() => {
            this.addresses = [...this.addresses];
        });

    } catch (err) {
        console.error(err);
        alert('Error saving address');
    }
}

// --- Contact Form Handler ---
async function submitContactForm(data) {
    // data is the Alpine context passed from the HTML
    const EMAILJS_PUBLIC_KEY = '42T1bilFNGpRfIUCA';
    const EMAILJS_SERVICE_ID = 'service_4l7habh';
    const EMAILJS_TEMPLATE_ID = 'template_4metym8';

    const form = document.getElementById('contact_form');
    const submitBtn = document.getElementById('contact_submit');
    const submitText = document.getElementById('submit_text');
    const submitSpinner = document.getElementById('submit_spinner');

    const name = document.getElementById('contact_name').value.trim();
    const email = document.getElementById('contact_email').value.trim().toLowerCase();
    const message = document.getElementById('contact_message').value.trim();

    if (data) data.contactError = '';

    if (!name || !email || !message) {
        if (data) data.contactError = 'PLEASE FILL ALL FIELDS';
        return;
    }

    submitBtn.disabled = true;
    submitSpinner.classList.remove('hidden');
    submitText.textContent = 'SENDING...';

    try {
        // Send via EmailJS
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            name: name,
            from_name: name,
            email: email,
            from_email: email,
            message: message,
            reply_to: email
        }, EMAILJS_PUBLIC_KEY);

        console.log('Email sent successfully ✅');

        if (window.supabase) {
            await window.supabase
                .from('contact_submissions')
                .insert([{ name, email, message }]);
        }

        if (data) data.contactSuccess = true;
        form.reset();

    } catch (err) {
        console.error('Contact error:', err);
        if (data) data.contactError = 'FAILED TO SEND. PLEASE TRY AGAIN.';
    } finally {
        submitBtn.disabled = false;
        submitSpinner.classList.add('hidden');
        submitText.textContent = 'SEND MESSAGE';
    }
}

// --- Newsletter Subscription Handler ---
async function submitNewsletter(data) {
    const EMAILJS_PUBLIC_KEY = '42T1bilFNGpRfIUCA';
    const EMAILJS_SERVICE_ID = 'service_4l7habh';
    const EMAILJS_TEMPLATE_ID = 'template_5geoshp';

    const emailInput = document.getElementById('newsletter_email');
    const submitBtn = document.getElementById('newsletter_submit');
    const newsText = document.getElementById('news_text');
    const newsSpinner = document.getElementById('news_spinner');

    const email = emailInput.value.trim().toLowerCase();
    
    if (data) {
        data.newsletterError = '';
        data.newsletterSuccess = false;
    }

    if (!email) return;

    submitBtn.disabled = true;
    newsSpinner.classList.remove('hidden');
    newsText.textContent = 'JOINING...';

    try {
        // 1. Send via EmailJS (Blocking)
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            email: email,
            to_email: email,
            user_email: email,
            message: 'Welcome to Never Made.',
            subject: 'Subscription Confirmed'
        }, EMAILJS_PUBLIC_KEY);

        console.log('Newsletter email sent successfully ✅');

        // 2. Log to Supabase (Non-blocking)
        if (window.supabase) {
            window.supabase
                .from('newsletter_subscriptions')
                .insert([{ email }])
                .then(({ error }) => {
                    if (error) console.warn('Supabase newsletter log failed (check if table exists):', error.message);
                    else console.log('Subscriber logged to Supabase ✅');
                })
                .catch(err => console.warn('Supabase error:', err));
        }

        if (data) data.newsletterSuccess = true;
        emailInput.value = '';

    } catch (err) {
        console.error('Newsletter EmailJS error:', err);
        if (data) {
            // Show more specific error if possible
            const errorMsg = err?.text || err?.message || 'FAILED TO JOIN.';
            data.newsletterError = 'FAILED TO JOIN: ' + errorMsg.toUpperCase();
        }
    } finally {
        submitBtn.disabled = false;
        newsSpinner.classList.add('hidden');
        newsText.textContent = 'Subscribe';
    }
}
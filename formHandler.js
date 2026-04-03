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

        // 🔗 Firebase Sync: Save address to Firestore if logged in
        if (window.auth && window.auth.currentUser) {
            const userRef = window.Firestore.doc(window.db, "users", window.auth.currentUser.uid);
            window.Firestore.updateDoc(userRef, {
                addresses: window.Firestore.arrayUnion(finalAddr)
            }).then(() => {
                console.log("Address synced to Firebase ✅");
            }).catch(err => {
                console.error("Firebase sync error:", err);
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
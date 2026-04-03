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

        this.showAddressForm = false;

        this.$nextTick(() => {
            this.addresses = [...this.addresses];
        });

    } catch (err) {
        console.error(err);
        alert('Error saving address');
    }
}
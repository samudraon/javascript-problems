const phones = [
    { name: 'Oneplus', camera: 48, storage: '128gb', price: 50000, color: 'blue' },
    { name: 'Realme', camera: 48, storage: '128gb', price: 23000, color: 'blue' },
    { name: 'Opppo', camera: 48, storage: '128gb', price: 21000, color: 'blue' },
    { name: 'Xiaomi', camera: 48, storage: '128gb', price: 45000, color: 'blue' },
    { name: 'Vivo', camera: 48, storage: '128gb', price: 56000, color: 'blue' },
    { name: 'Samsung', camera: 48, storage: '128gb', price: 15000, color: 'blue' },
];

function cheapestPhones(phones) {
    let cheap = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheap.price) {
            cheap = phone;
        }
    }
    return cheap;
}
const mySelection = cheapestPhones(phones);
console.log(mySelection);
const names = ['salman', 'nafi', 'hasib', 'limon', 'nahid', 'salman', 'nahid', 'mamun', 'hasib'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

const phones = [
    { name: 'Oneplus', camera: 48, storage: '128gb', price: 50000, color: 'blue' },
    { name: 'Realme', camera: 8, storage: '128gb', price: 23000, color: 'blue' },
    { name: 'Opppo', camera: 18, storage: '128gb', price: 21000, color: 'blue' },
    { name: 'Xiaomi', camera: 68, storage: '128gb', price: 45000, color: 'blue' },
    { name: 'Vivo', camera: 108, storage: '128gb', price: 56000, color: 'blue' },
    { name: 'Samsung', camera: 28, storage: '128gb', price: 15000, color: 'blue' },
];

function highestCamera(phones) {
    let highest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}

const mySelection = highestCamera(phones);
console.log(mySelection);
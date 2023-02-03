const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 5 },
    { name: 'shirt', price: 1500, quantity: 4 },
    { name: 'pant', price: 600, quantity: 2 },
    { name: 'belt', price: 200, quantity: 3 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);
const country = 'London';
const age = 24;
const isIndependent = true;
const student = { id: 132, class: 11, name: 'Agun' };
function add(num1, num2) {
    return num1 + num2;
}

const friends = [12, 43, 233, 23, 56];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof add);

// for checking array
console.log(Array.isArray(friends));

// for searching array
console.log(friends.includes(23));

if (friends.indexOf(233) !== 1) {

}

//concat : 
const newFriendsAge = [21, 22, 23, 20];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
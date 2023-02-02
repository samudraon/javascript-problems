const friends = [12, 45, 44, 62, 29, 58, 51, 91];

//Removes elements from an array
//and, If necessary, inserts new elements in their place, 
//returning the deleted elements.
// will change the original array
const partial = friends.splice(2, 5, 454, 622, 882);
console.log(partial);
console.log(friends);
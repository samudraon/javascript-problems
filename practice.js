const names = ['salman', 'nafi', 'hasib', 'limon', 'nahid', 'salman', 'nahid', 'mamun', 'hasib'];

function removeDuplicate(names) {
    const unique = []; 
    for (let i = 0; i < names.length; i++) {
        const name= names[i];
        if(unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
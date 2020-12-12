
let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [...arr1];
let arr2 = [arr1];
arr1.push(7, 8, 9, 10, 11, 12, 13);
console.log(arr1);
console.log(arr2);
// fullName(1, 2, 3, 4, 5, 6, 7, 8, 9);



let obj1 = {
    fname: "arbab",
    lname: "Anjum"
}

let obj2 = {
    age: 19,
    contact: 0347
}

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
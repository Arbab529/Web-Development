let arr1 = [1, 2, 3, 4, 5]
// let arr2 = []

// let doubleValues = (item) => {
//     return item * 2;
// }

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(doubleValues(arr1[i]))
// }

let objArr = [
    {
        name: "arbab",
        Age: 20
    },
    {
        name: "Arain",
        Age: 21
    },
    {
        name: "Anjum",
        Age: 22
    }
]

let arr2 = objArr.map((data, pos) => {
    console.log(data);
    return {
        Myname: data.name
    }
})

console.log(arr2)
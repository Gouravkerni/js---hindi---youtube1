//array

const arr = [1,2,3,4,5]
console.log(arr[0]);         //1


const heroes = ["shaktiman","sharukh khan"]
console.log(heroes);          // [ 'shaktiman', 'sharukh khan' ]

const myArr = new Array(1,3,5,7,9)
console.log(myArr[2]);      //5

// Array methods 

myArr.push(11)
console.log(myArr);    //[ 1, 3, 5, 7, 9, 11 ]
myArr.pop()       
console.log(myArr);    //[ 1, 3, 5, 7, 9]


myArr.unshift(10)
console.log(myArr);     // [ 10, 1, 3, 5, 7, 9 ]

myArr.shift()
console.log(myArr);     // [ 1, 3, 5, 7, 9 ]

console.log(myArr.includes(9));         //true
console.log(myArr.indexOf(7));         //3

const newArr = myArr.join()
console.log(myArr);       //[ 1, 3, 5, 7, 9 ]
console.log(newArr);      //1,3,5,7,9

const score = 100
console.log(score);   //100

const balance = new Number(100)
console.log(balance);  // [Number: 100]

console.log( typeof balance.toString());   // string 


const anotherNumber = 322.293
console.log(anotherNumber.toPrecision(3)); //322

   // ******************* Maths ****************
console.log(Math); // Object [Math] {}
console.log(Math.abs(-2));   // 2
console.log(Math.min(2,4,7,9,1));   // 1
console.log(Math.max(10,233,9,1,3));    //233
console.log(Math.random());         //0.6012399048002035
console.log(Math.round(7.7));          //8
console.log(Math.floor(5.4));          //5
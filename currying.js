// function multiply(x) {
//   return function(y) {
//     return x * y
//   }
// }


let multiply = x => y => x * y;

let multiplyByThree = multiply(3);

console.log(multiplyByThree(6));
console.log(multiplyByThree(4));
console.log(multiply(2)(5));

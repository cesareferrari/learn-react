function makePromise(isGood) {
  return new Promise((resolve, reject) => {
    if (isGood) {
      resolve('all good');
    } else {
      reject('all bad');
    }
  });
}

let p

p = makePromise(true);
console.log(p); // Promise { 'all good' }


p = makePromise(false);
console.log(p); // Promise { <rejected> 'all bad' }


p
  .then(goodValue => console.log(goodValue)) // all good
  .catch(badValue => console.log(badValue))  // all bad



console.log(new Promise(() => {}));
// Promise { <pending> }





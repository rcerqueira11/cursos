var someArray = [42,554,NaN]
console.log(someArray.includes(NaN)); // true
console.log(someArray.indexOf(NaN) >= 0); // false
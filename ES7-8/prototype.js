let numbers = [1,2,3,4];
let moreNumbers = new Array(1,2,3,4);

Array.prototype.count = function () {
    return this.length;
}

console.log(numbers.count());
console.log(moreNumbers.count());
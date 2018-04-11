arr = [2,4,6,8,9,15]
arrRes = []
arr.forEach(function(element) {
    if (Number.isInteger(Math.log2(element))){
        arrRes.push(Math.pow(element,2));
    }
});
console.log(arrRes)


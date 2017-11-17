let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};

let copy = {};
//copy ride object to empty object called copy
Object.assign(copy,ride);
// getting descriptor of the go getter 
let descriptors = Object.getOwnPropertyDescriptor(copy, 'go');



let aBetterCopy = {};
Object.defineProperties(aBetterCopy, 
    Object.getOwnPropertyDescriptors(ride));

let betterDescriptor =
    Object.getOwnPropertyDescriptor(aBetterCopy, 'go');
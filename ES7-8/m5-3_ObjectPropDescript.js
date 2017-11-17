let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};


let descriptors = Object.getOwnPropertyDescriptors(ride);
console.log(descriptors);


descriptors.go.get();
// and get the value of capacity by writing
console.log(descriptors.capacity.value);
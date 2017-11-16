let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};

for (let key in ride){
    console.log(key);
    console.log(ride[key]);
}

console.log(Object.keys(ride));
console.log(Object.values(ride));

let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};


console.log(Object.entries(ride));

for (let keyValue of Object.entries(ride)) {
    console.log(keyValue);
}

for (let [key,value] of Object.entries(ride)) {
    console.log(`key: ${key}   value: ${value}`);
}

//Easier with map

var map = new Map(Object.entries(ride))
map.forEach((value, key) => {
    console.log(`key: ${key}  value: ${value}`);
});

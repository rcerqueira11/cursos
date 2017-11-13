var ride = {name: "The Minions"}
let newRides = [ride, {name: "Scooby Doo"}];

console.log(newRides.includes(ride)); //true
console.log(newRides.includes({ name: "Scooby Doo" })); // false

// look in the element if the same instance is pressentc
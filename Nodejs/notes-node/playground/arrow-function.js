// var squeare = (x) => {
//     var result = x*x;
//     return result;
// }

// 
// var squeare = (x) => x*x;
// 
// var squeare = x => x*x;

// console.log(squeare(4))

var user = {
    name: 'Ricardo',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. ${this.name}`);
    }
}

user.sayHiAlt(2,34,12,41);
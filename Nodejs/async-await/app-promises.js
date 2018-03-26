const users = [{
    id: 1,
    name: 'Aura',
    schoolId: 101
}, {
    id: 2,
    name: 'Enio',
    schoolId: 999
}];
const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}]


const getUser = (id) => {
    return new Promise((resolve, reject) => {
        // if not find anything user will be undefine
        const user = users.find((user) => user.id === id);

        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id ${id}.`);
        }
    })
}

//get all grades of a particular student by id 

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        const grades_ = grades.filter((grade) => grade.schoolId === schoolId);

        if (grades_) {
            resolve(grades_)
        } else {
            reject(`Unable to find grades with schoolId ${id}.`);
        }
    })
}

// returns Andrew have 83% average in the class 
//problem here we dont have access to user in the other function
// work around is to define a var before 
const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser
        return getGrades(user.schoolId);
    }).then((grades) => {
        //average
        //return our string

        let average = 0;

        if (grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }

        // console.log(average)

        return `${user.name} has a ${average}% in the class.`;
    })
}

//  

const getStatusAlt = async (userId) => {
    //if resolve the result will be in user as the resolve value
    // if reject i will throw an error and the function stop executing
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);

    let average = 0;

    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class.`;
}

// console.log(getStatusAlt())
getStatusAlt(2).then((status) => {
    console.log(status)
}).catch((e) => {
    console.log(e);
})



// getUser(1).then((user)=>{
//     console.log(user);
// }).catch((e)=>{
//     console.log(e);
// })

// getGrades(101).then((grades)=>{
//     console.log(grades);
// }).catch((e)=>{
//     console.log(e);
// })

// getStatus(2).then((status)=>{
//     console.log(status);
// }).catch((e)=>{
//     console.log(e);
// }) 
## Async Await 

- we avoid thins like
    - chaining
    - works around
- we mark our functions as special functions

- `await` is used insid of out function, but before we use it we have to mark our funcion as `async`

- `async` change how our code works and returns a promise 

```js
const getStatusAlt = async (userId)=> {
    return 'Mike';
}

console.log(getStatusAlt())

```

- when use async whatever you return it gonna be resolve

- to reject we just trow an error `throw new Error('this is an error')`

- when we throw a new error is the same as rejecting some value

- `return == resolve`
- `throw == reject`

- await will wait until the promise resolve or reject

- await does NOT return a promise 

- if resolve the result will be in user as the resolve value 

- if reject i will throw an error and the function stop executing

```js
const getStatusAlt = async (userId) => {
   
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);

    let average = 0;

    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class.`;
}

getStatusAlt(2).then((status) => {
    console.log(status)
}).catch((e) => {
    console.log(e);
})

```

- there is no top level await 
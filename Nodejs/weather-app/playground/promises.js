var somePromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        // resolve('It worked')
        reject('Unable to fulfill promise');
    }, 2500);
})

somePromise.then((message)=>{
    console.log(message);
}, (errorMessage)=>{
    console.log('error:', errorMessage)
})
var asyncAdd = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject("Both parameters must be numbers");
            }
        }, 1500);
    })
}

asyncAdd(5,'7').then((res)=>{
    //resolve case
    console.log(res);
    return asyncAdd(res,33);
}).then((res)=>{
    console.log('result',res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
})

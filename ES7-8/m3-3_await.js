var return123 = async() => {
    return 123;
}


// await return123(); // no funciona porque await solo funciona en async functions

var executingFunction = async() => {
    //await pull the result out of the promise
    let result = await return123();

    // this will be executed when the promise is done 
    console.log(result);
}

executingFunction()
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };

    setTimeout(()=> {
        callback(user);

    },3000)
};

// hope the users object come back as an argument to the callback funtion


// la funcion es definida por mi
getUser(31, (userObject)=>{
    console.log(userObject);
});
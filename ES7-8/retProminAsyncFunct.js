let fetchRides = async () => {
    return httpGet("https://api.com/rides"); // returns promise
}

let result = fetchRides();


    // result is singular promise
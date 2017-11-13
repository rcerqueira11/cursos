var return123 = async () => {
    return 123;
}

console.log(return123());

return123().then(result => {
    console.log(result);
})


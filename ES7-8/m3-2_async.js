var return123 = async () => {
    throw new Error("Somthing went wraaaaaaaaaaaaaaaaang");
    return 123;
}

return123().catch(result => {
    console.log(result);
})

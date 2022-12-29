const addSum = (a, b, callback) => {
    setTimeout(() => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            return callback('a, b must be number');
        } 
        callback(undefined, a+b);
    }, 3000);
}

addSum(10, 'sbd', (error, sum) =>  {
    if(error) return console.log({ error });
    console.log({ sum });
});
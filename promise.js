const addSum = (a, b) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== 'number') {
                reject('a, b must be number'); //실패
            } 
            resolve(a + b); //성공
        }, 1000);
})

// addSum(10, 10, (error1, sum1) => {
//     if(error1) return console.log({ error1 });
//     console.log({ sum1 })
//     addSum(sum1, 15, (error2, sum2) => {
//         if(error2) return console.log({ error2 })
//         console.log({ sum2 })
//     })
// })

const totalSum = async () => {
    try{
        let sum = await addSum(10, 10)
        let sum2 = await addSum(sum, 10)
        console.log({ sum, sum2 })
    } catch(err) {
        if(err) console.log({ err })
    }
}

totalSum();
const birthday = (s: number[], d: number, m: number): number => {
    let divideCount = 0;
    s.map((el, ind) => {
        let currentSum = 0;
        for(let i=ind; i<ind+m; i++)
            currentSum += s[i]
        if(currentSum === d) divideCount++
    })
    
    return divideCount;
}

console.log(birthday([4], 4, 1));


// JAVASCRIPT
// const birthday = (s, d, m) => {
//     let divideCount = 0;
//     s.map((el, ind) => {
//         let currentSum = 0;
//         for(let i=ind; i<ind+m; i++)
//             currentSum += s[i]
//         if(currentSum === d) divideCount++
//     })
    
//     return divideCount;
// }
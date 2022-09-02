const countingValleys = (steps: number, path: string): number => {
    let enterCount = 0;
    let high = 0;

    for(let i=0; i<path.length; i++) 
        if(path[i] === 'U') high++;
        else {
            high--;
            if(high === -1) enterCount++;
        }
    return enterCount;
}

console.log(countingValleys(8, 'UDDDUDUU'));


// JAVASCRIPT
// const countingValleys = (steps, path) => {
//     let enterCount = 0;
//     let high = 0;

//     for(let i=0; i<path.length; i++) 
//         if(path[i] === 'U') high++;
//         else {
//             high--;
//             if(high === -1) enterCount++;
//         }
//     return enterCount;
// }
type retType = [number, number]

const breakingRecords = (scores: number[]): retType => {
    let min = scores[0];
    let max = scores[0];
    let minChangeCount = 0;
    let maxChangeCount = 0;

    for(let i=1; i<scores.length; i++) {
        if(scores[i] < min) {
            minChangeCount++;
            min = scores[i];
            continue;
        }
        if(scores[i] > max) {
            maxChangeCount++;
            max = scores[i];
            continue;
        }
    }
    return [maxChangeCount, minChangeCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));


// JAVASCRIPT
// const breakingRecords = (scores) => {
//     let min = scores[0];
//     let max = scores[0];
//     let minChangeCount = 0;
//     let maxChangeCount = 0;

//     for(let i=1; i<scores.length; i++) {
//         if(scores[i] < min) {
//             minChangeCount++;
//             min = scores[i];
//             continue;
//         }
//         if(scores[i] > max) {
//             maxChangeCount++;
//             max = scores[i];
//             continue;
//         }
//     }
//     return [maxChangeCount, minChangeCount];
// }
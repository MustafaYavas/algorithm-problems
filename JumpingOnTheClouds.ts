const jumpingOnClouds = (c: number[]): number => {
    let jumpCount = 0;
    let inaRow = 1;

    for(let i=1; i<c.length; i++) {
        if(c[i] === 0) {
            jumpCount++;
            inaRow++;
        } else {
            inaRow = 0;
            continue;
        }

        if(inaRow === 3) {
            jumpCount--;
            inaRow = 1;
        }
    }

    return jumpCount;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));


// JAVASCRIPT
// const jumpingOnClouds = (c) => {
//     let jumpCount = 0;
//     let inaRow = 1;

//     for(let i=1; i<c.length; i++) {
//         if(c[i] === 0) {
//             jumpCount++;
//             inaRow++;
//         } else {
//             inaRow = 0;
//             continue;
//         }

//         if(inaRow === 3) {
//             jumpCount--;
//             inaRow = 1;
//         }
//     }

//     return jumpCount;
// }
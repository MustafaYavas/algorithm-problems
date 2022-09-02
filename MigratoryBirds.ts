const migratoryBirds = (arr: number[]): number => {
    let max = 1;
    let count = 0;
    let sortedArr = arr.sort();
    let type: number = sortedArr[0];
    
    for(let i=0; i<sortedArr.length; i++) { 
        count = (sortedArr[i] === sortedArr[i-1]) ? count + 1 : 0;
        if (count > max) {
            type = sortedArr[i];
            max = count;
        }
    }
    return type;
} 

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));


// JAVASCRIPT
// const migratoryBirds = (arr) => {
//     let max = 1;
//     let count = 0;
//     let sortedArr = arr.sort();
//     let type = sortedArr[0];
    
//     for(let i=0; i<sortedArr.length; i++) { 
//         count = (sortedArr[i] === sortedArr[i-1]) ? count + 1 : 0;
//         if (count > max) {
//             type = sortedArr[i];
//             max = count;
//         }
//     }
//     return type;
// }
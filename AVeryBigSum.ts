const aVeryBigSum = (ar: number[]): number => {
    let result = 0;
    ar.forEach(num => {
        result += num;
    });
    return result;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));


// JAVASCRIPT
// const aVeryBigSum = (ar) => {
//     let result = 0;
//     ar.forEach(num => {
//         result += num;
//     });
//     return result;
// }
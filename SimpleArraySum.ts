const simpleArraySum = (ar: number[]): number => {
    let result = 0;
    ar.forEach(el => {
        result += el;
    });
    return result;
}

console.log(simpleArraySum([1,2,3]));


// JAVASCRIPT
// const simpleArraySum = (ar) => {
//     let result = 0;
//     ar.forEach(el => {
//         result += el;
//     });
//     return result;
// }
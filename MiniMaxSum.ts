const miniMaxSum = (arr: number[]): void => {
    const sortedArr = arr.sort((a,b) => a-b);
    const min = sortedArr.slice(0,4).reduce((sum, current) => sum + current, 0);
    const max = sortedArr.slice(1,5).reduce((sum, current) => sum + current, 0);
    console.log(min, max);
}

miniMaxSum([3, 19, 45, 23, 7]);


// JAVASCRIPT
// const miniMaxSum = (arr) => {
//     const sortedArr = arr.sort((a,b) => a-b);
//     const min = sortedArr.slice(0,4).reduce((sum, current) => sum + current, 0);
//     const max = sortedArr.slice(1,5).reduce((sum, current) => sum + current, 0);
//     console.log(min, max);
// }
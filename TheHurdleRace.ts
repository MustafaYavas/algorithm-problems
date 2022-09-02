const hurdleRace = (k: number, height: number[]): number => {
    const max = Math.max.apply(Math, height);
    return max>k?(max-k):0;
}

console.log(hurdleRace(1, [1,2,3,3,2]));


// JAVASCRIPT
// const hurdleRace = (k, height) => {
//     const max = Math.max.apply(Math, height);
//     return max>k?(max-k):0;
// }
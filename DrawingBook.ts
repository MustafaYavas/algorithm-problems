const pageCount = (n: number, p: number): number =>  {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);
    
    return Math.min(pageTurns, totalTurns - pageTurns);
}

console.log(pageCount(5, 4));


// JAVASCRIPT
// const pageCount = (n, p) =>  {
//     const pageTurns = Math.floor(p / 2);
//     const totalTurns = Math.floor(n / 2);
    
//     return Math.min(pageTurns, totalTurns - pageTurns);
// }
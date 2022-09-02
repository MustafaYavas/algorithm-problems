const howManyGames = (p: number, d: number, m: number, s: number): number => {
    let totalAmount = 0;
    let gamesCount = 0;

    while(totalAmount < s) {
        totalAmount += p;
        gamesCount++;
        
        if(p-d < m) p = m
        else p -= d;
        
        if(totalAmount > s) gamesCount--;
    }

    return gamesCount;
}

console.log(howManyGames(20, 3, 6, 70));


// JAVASCRIPT
// const howManyGames = (p, d, m, s) => {
//     let totalAmount = 0;
//     let gamesCount = 0;

//     while(totalAmount < s) {
//         totalAmount += p;
//         gamesCount++;
        
//         if(p-d < m) p = m
//         else p -= d;
        
//         if(totalAmount > s) gamesCount--;
//     }

//     return gamesCount;
// }
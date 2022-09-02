const saveThePrisoner = (n: number, m: number, s: number): number => {
    let start = s-1;
    let prisoner: number;

    prisoner = (start + m) % n;
    if(prisoner === 0) return n;

    return prisoner;
}

console.log(saveThePrisoner(4, 6, 2));


// JAVASCRIPT
// const saveThePrisoner = (n, m, s) => {
//     let start = s-1;
//     let prisoner;

//     prisoner = (start + m) % n;
//     if(prisoner === 0) return n;

//     return prisoner;
// }
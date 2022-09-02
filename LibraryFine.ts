const libraryFine = (d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number => {
    if (y1 === y2 && m1 === m2 && d1 > d2) return 15*(d1-d2);
    if (y1 === y2 && m1 > m2) return 500*(m1-m2);
    if (y1 > y2) return 10000;
    return 0;
}

console.log(libraryFine(14, 7, 2018, 5, 7, 2018));


// JAVASCRIPT
// const libraryFine = (d1, m1, y1, d2, m2, y2) => {
//     if (y1 === y2 && m1 === m2 && d1 > d2) return 15*(d1-d2);
//     if (y1 === y2 && m1 > m2) return 500*(m1-m2);
//     if (y1 > y2) return 10000;
//     return 0;
// }
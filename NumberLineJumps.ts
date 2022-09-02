const kangaroo = (x1: number, v1: number, x2: number, v2: number): string => {
    if(x2>x1 && v2>v1) return 'NO';
    if((x1 - x2) % (v2 - v1) === 0) return 'YES'
    else return 'NO';
}

console.log(kangaroo(0, 3, 5, 2));


// JAVASCRIPT
// const kangaroo = (x1, v1, x2, v2) => {
//     if(x2>x1 && v2>v1) return 'NO';
//     if((x1 - x2) % (v2 - v1) === 0) return 'YES'
//     else return 'NO';
// }
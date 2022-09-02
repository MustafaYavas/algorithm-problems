const staircase = (n: number): void => {
    for (let i=1; i <= n; i++){
        let str = '';
        for (let j=0; j < n-i; j++) str += ' ';
        for (let k=0; k < i; k++) str += '#';
        console.log(str);
    }
}

staircase(6);


// JAVASCRIPT
// const staircase = (n) => {
//     for(let i=0; i<n; i++) {
//         for(let j=0; j<n-(i+1); j++) process.stdout.write(' ');
//         process.stdout.write('#');
//         for(let j=0; j<i; j++) process.stdout.write('#');
//         console.log();
//     }
// }
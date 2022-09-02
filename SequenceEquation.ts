const permutationEquation = (p: number[]): number[]=> {
    let max = Math.max(...p);
    let min = Math.min(...p);
    let sequence: number[] = [];
    
    for(let i=min; i<=max; i++) 
        sequence.push(p.indexOf(p.indexOf(i) + 1) + 1);
    
    return sequence;
}

console.log(permutationEquation([2, 3, 1]));


// JAVASCRIPT
// const permutationEquation = (p) => {
//     let max = Math.max(...p);
//     let min = Math.min(...p);
//     let sequence = [];
    
//     for(let i=min; i<=max; i++) 
//         sequence.push(p.indexOf(p.indexOf(i) + 1) + 1);
    
//     return sequence;
// }
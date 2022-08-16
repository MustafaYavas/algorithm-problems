p = [2, 3, 1];

const permutationEquation = (p) => {
    let max = Math.max(...p);
    let min = Math.min(...p);
    let sequence = [];
    
    for(let i=min; i<=max; i++) 
        sequence.push(p.indexOf(p.indexOf(i) + 1) + 1);
    
    return sequence;
}

console.log(permutationEquation(p));
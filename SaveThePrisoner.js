n = 4;
m = 6;
s = 2; 

const saveThePrisoner = (n, m, s) => {
    let start = s-1;
    let prisoner;

    prisoner = (start + m) % n;
    if(prisoner === 0) return n;

    return prisoner;
}

console.log(saveThePrisoner(n, m, s));
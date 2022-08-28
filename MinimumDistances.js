a = [7, 1, 3, 4, 1, 7]

const minimumDistances = (a) => {
    let indMap = new Map();

    let min = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<a.length; i++) {
        let temp = a[i];

        if(indMap.has(temp)){
            min = Math.min(min, i-indMap.get(temp));
            continue;
        }
        indMap.set(temp, i);
    }

    if(min === Number.MAX_SAFE_INTEGER)  return -1;

    return min;
}

console.log(minimumDistances(a));

k = 1;
height = [1,2,3,3,2];

const hurdleRace = (k, height) => {
    const max = Math.max.apply(Math, height);
    return max>k?(max-k):0;
}

console.log(hurdleRace(k, height));
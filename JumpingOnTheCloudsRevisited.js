c = [0, 0, 1, 0, 0, 1, 1, 0]
k = 2;  // the length of one jump

const jumpingOnClouds = (c, k) => {
    let visited = false;
    let i = 0;
    let energy = 100;

    while(!visited) {
        i = (i+k)%c.length;
        if(c[i] === 0) energy--;
        else energy -= 3;

        if(i === 0) visited = true;
    }

    return energy;
}

console.log(jumpingOnClouds(c, k));
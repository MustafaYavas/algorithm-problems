a = [1, 2, 3];
b = [3, 2, 1];

const compareTriplets = (a, b) => {
    let aScore = 0;
    let bScore = 0;

    for(let i=0; i<a.length; i++) {
        if(a[i] > b[i]) aScore++;
        else if(b[i] > a[i]) bScore++;
        else;
    }
    return [aScore, bScore];
}

console.log(compareTriplets(a, b));
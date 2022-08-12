k = 3;
a = [-2, -1, 0, 1, 2];

const angryProfessor = (k, a) => {
    let arrivedOn = 0;

    a.map(time => {
        if(time <= 0) arrivedOn++;
    })

    return arrivedOn < k ? 'YES' : 'NO'
}

console.log(angryProfessor(k, a));
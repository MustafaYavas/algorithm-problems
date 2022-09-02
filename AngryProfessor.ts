const angryProfessor = (k: number, a: number[]): string => {
    let arrivedOn = 0;

    a.map(time => {
        if(time <= 0) arrivedOn++;
    })

    return arrivedOn < k ? 'YES' : 'NO'
}

console.log(angryProfessor(3, [-2, -1, 0, 1, 2]));


//  JAVASCRIPT
// const angryProfessor = (k, a) => {
//     let arrivedOn = 0;

//     a.map(time => {
//         if(time <= 0) arrivedOn++;
//     })

//     return arrivedOn < k ? 'YES' : 'NO'
// }
const gradingStudents = (grades: number[]): number[] => {
    let newGrades: number[] = [];
    for(let i=0; i<grades.length; i++) {
        if(grades[i] >= 38) {
            let base = Math.floor(grades[i]/5);
            if((base+1)*5 - grades[i] < 3) newGrades.push((base+1)*5);
            else newGrades.push(grades[i]);
            continue;
        }
        newGrades.push(grades[i])
    }
    return newGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));


// JAVASCRIPT
// const gradingStudents = (grades) => {
//     let newGrades = [];
//     for(let i=0; i<grades.length; i++) {
//         if(grades[i] >= 38) {
//             let base = Math.floor(grades[i]/5);
//             if((base+1)*5 - grades[i] < 3) newGrades.push((base+1)*5);
//             else newGrades.push(grades[i]);
//             continue;
//         }
//         newGrades.push(grades[i])
//     }
//     return newGrades;
// }
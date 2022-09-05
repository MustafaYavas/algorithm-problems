const flatlandSpaceStations = (n: number, c: number[]): number => {
    if(n === c.length) return 0;
    let distances: number[] = [];
    for(let i=0; i<n; i++) {
        let min = Math.abs(i-c[0]);
        for(let j=1; j<c.length; j++) if(Math.abs(i-c[j]) <= min) min = Math.abs(i-c[j])
        distances.push(min);
    }
    return Math.max(...distances);
}

console.log(flatlandSpaceStations(3, [1]))


// JAVASCRIPT
// const flatlandSpaceStations = (n, c) => {
//     if(n === c.length) return 0;
//     let distances = [];
//     for(let i=0; i<n; i++) {
//         let min = Math.abs(i-c[0]);
//         for(let j=1; j<c.length; j++) {
//             if(Math.abs(i-c[j]) <= min) min = Math.abs(i-c[j])
//         }
//         distances.push(min);
//     }
//     return Math.max(...distances)
// }
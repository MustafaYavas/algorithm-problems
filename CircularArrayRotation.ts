const circularArrayRotation = (a: number[], k: number, queries: number[]): number[] => {
    let queriesArr: number[] = [];
    let newQueries = queries.map(q => {
        return q+k-1;
    })

    for(let i=0; i<queries.length; i++) 
        if(newQueries[i] >= a.length) queriesArr.push(a[a.length-newQueries[i]]) 
        else queriesArr.push(a[newQueries[i]])

    return queriesArr;
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));


// JAVASCRIPT
// const circularArrayRotation = (a, k, queries) => {
//     const queriesArr = [];
//     let newQueries = queries.map(q => {
//         return q+k-1;
//     })

//     for(let i=0; i<queries.length; i++) 
//         if(newQueries[i] >= a.length) queriesArr.push(a[a.length-newQueries[i]]) 
//         else queriesArr.push(a[newQueries[i]])

//     return queriesArr;
// }
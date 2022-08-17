a = [3,4,5];
k = 2; 
queries = [1, 2];

circularArrayRotation = (a, k, queries) => {
    const queriesArr = [];
    let newQueries = queries.map(q => {
        return q+k-1;
    })

    for(let i=0; i<queries.length; i++) 
        if(newQueries[i] >= a.length) queriesArr.push(a[a.length-newQueries[i]]) 
        else queriesArr.push(a[newQueries[i]])

    return queriesArr;
}

console.log(circularArrayRotation(a, k, queries));
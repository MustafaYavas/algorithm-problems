const equalizeArray = (arr: number[]): number => {
    let most = arr.reduce((a,b,i,arr) => (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b), 0)

    let newArr: number[] = [];
    arr.map(num => {
        if(num === most) newArr.push(num)
    })

    return arr.length - newArr.length;
}

console.log(equalizeArray([1, 2, 2, 3]));


// JAVASCRIPT
// const equalizeArray = (arr) => {
//     let most = arr.reduce((a,b,i,arr) => (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b), null)

//     let newArr = [];
//     arr.map(num => {
//         if(num === most) newArr.push(num)
//     })

//     return arr.length - newArr.length;
// }
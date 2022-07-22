const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

const diagonalDifference = (arr) => {
    let leftDia = 0;
    let rightDia = 0;

    for(let i = 0; i < arr.length; i++) {
        leftDia += arr[i][i];
        rightDia += arr[i][arr.length-1-i];
    }

    return Math.abs(leftDia-rightDia);
}

console.log(diagonalDifference(arr));;
const kaprekarNumbers = (p, q) => {
    let kaprekarList = [];
    
    for(let i=p; i<=q; i++) {
        let squareNum = Math.pow(i, 2);

        let firstHalf = squareNum.toString().substring(0, squareNum.toString().length/2) || 0;
        let lastHalf = squareNum.toString().substring(squareNum.toString().length/2) || 0;
        if(parseInt(firstHalf) + parseInt(lastHalf) === i) kaprekarList.push(i);
    }
    
    kaprekarList.length === 0 ? console.log('INVALID RANGE') : console.log(...kaprekarList)
}

kaprekarNumbers(1, 100)
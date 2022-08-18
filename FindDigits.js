const findDigits = (n) => {
    let stringNum = n.toString();
    let divisorCount = 0;

    for(let i=0; i<stringNum.length; i++) 
        if(n % parseInt(stringNum[i]) === 0) divisorCount++;
    
    return divisorCount;
}

console.log(findDigits(10));
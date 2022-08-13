const beautifulDays = (i, j, k) => {
    let day = 0;
    for(let c=i; c<=j; c++) {
        let reverse = reverseNumber(c);
        if((c-reverse)%k === 0) day++;
    }
    return day;
}

const reverseNumber = (c) => {
    let newStr = c.toString();
    let reverseNum = '';

    for(let i=newStr.length-1; i>=0; i--)
        reverseNum += newStr[i];
    return parseInt(reverseNum);
}

console.log(beautifulDays(20, 23, 6));
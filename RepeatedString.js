s = 'aba';
n = 10;

const repeatedString = (s, n) => {
    let freqNum = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let frequency = 0;

    for (let i = 0; i < s.length; i++) 
        if (s[i] === 'a') frequency++;
        
    frequency *= freqNum;

    for (let i = 0; i < reminder; i++) 
        if (s[i] === 'a') frequency++;
    
    return frequency;
}

console.log(repeatedString(s, n));
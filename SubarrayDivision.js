s = [4];
d = 4;
m = 1;

const birthday = (s, d, m) => {
    let divideCount = 0;
    s.map((el, ind) => {
        let currentSum = 0;
        for(let i=ind; i<ind+m; i++)
            currentSum += s[i]
        if(currentSum === d) divideCount++
    })
    
    return divideCount;
}

console.log(birthday(s, d, m));
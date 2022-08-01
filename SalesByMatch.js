n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

sockMerchant = (n, ar) => {
    let pair = 0;
    const pairMap = new Map();
    for(let i=0; i<ar.length; i++) 
        if(pairMap.has(ar[i])) {
            pair++;
            pairMap.delete(ar[i])
        } 
        else pairMap.set(ar[i], ar[i])
        
    return pair;
}

console.log(sockMerchant(n, ar));
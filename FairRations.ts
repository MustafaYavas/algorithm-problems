const fairRations = (B: number[]): string => {
    let loaf = 0;
    for(let i=0; i<B.length; i++) {
        if(B[i] % 2 !== 0) 
            if(i+1 < B.length) {
                B[i]++;
                B[i+1]++;
                loaf += 2;
            }
            else return 'NO';
    }

    return loaf.toString();
}

console.log(fairRations([1,2]))
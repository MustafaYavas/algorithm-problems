const extraLongFactorials = (n) => {
    let result = BigInt('1');
    while(n>1) {
        result *= BigInt(n);
        n--;
    }
    console.log(result.toString());
}

console.log(extraLongFactorials(25));
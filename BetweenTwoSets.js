a = [2,4];
b = [16,32,96];

getTotalX = (a, b) => {
    let lcm = findLCM(a);
    let gcd = findGCD(b);

    let count = 0;
    let i=1;
    while(i>0) {
        if((lcm*i)>gcd) break;
        if(gcd%(lcm*i) === 0 && (lcm*i)<=gcd) count++;
        i++;
    }
    
    return count;
}

findLCM = (a) => {  // find Least Common Multiple number

    let lcm = (n1, n2) => {
        let lar = Math.max(n1, n2);
        let small = Math.min(n1, n2);
        
        let i = lar;
        while(i % small !== 0){
          i += lar;
        }
        return i;
    }

    let num = a[0];

    for(let i=1; i<a.length; i++) {
        num = lcm(num, a[i])
    }
    return num;
}

findGCD = (b) => {  // find Greatest Common Factor number
    let gcd = (a, b) => {
        while (b > 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let num = b[0];

    for(let i=1; i<b.length; i++) {
        num = gcd(num, b[i])
    }
    return num;
}

console.log(getTotalX(a, b));
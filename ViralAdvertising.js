const viralAdvertising = (n) => {
    let shared = 5;
    let liked = Math.floor(shared/2);
    let cumulative = liked;

    for(let i =0; i<n-1; i++) {
        shared = Math.floor(shared/2)*3;
        cumulative += Math.floor(shared/2);
    }
    return cumulative;
}

console.log(viralAdvertising(5));
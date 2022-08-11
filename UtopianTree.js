const utopianTree = (n) => {
    let height = 1;

    for(let i=0; i<n; i++){
        if(i%2 !== 0) height += 1;
        else height *= 2;
    }

    return height;
}

console.log(utopianTree(4));
const staircase = (n) => {
    for(let i=0; i<n; i++) {
        for(let j=0; j<n-(i+1); j++) {
            process.stdout.write(' ');
        }
        process.stdout.write('#');
        for(let j=0; j<i; j++) {
            process.stdout.write('#');
        }
        console.log();
    }
}

staircase(6);
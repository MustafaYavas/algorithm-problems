const workbook = (n: number, k: number, arr: number[]): number => {
    let specialProblems = 0;
    let page = 0;
    let problem = 0;

    for(let i=0; i<n; i++) {
        problem = 0;
        page++;
        for(let j=1; j<=arr[i]; j++) {
            if(problem === k) {
                page++;
                problem = 0;
            }
            problem++;
            if(j === page) specialProblems++;
        }
    }
    return specialProblems;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]))
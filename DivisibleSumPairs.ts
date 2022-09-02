const pairs = [1, 3, 2, 6, 1, 2];

const divisibleSumPairs = (n: number, k: number, ar: number[]): number => {
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (i < j && (ar[i] + ar[j]) % k === 0) count++;
		}
	}
	return count;
};

console.log(divisibleSumPairs(pairs.length, 3, pairs));


// JAVASCRIPT
// const divisibleSumPairs = (n, k, ar) => {
//     let count = 0;
//     for(let i=0; i<n; i++) {
//         for(let j=i+1; j<n; j++) {
//             if(i<j && ((ar[i] + ar[j]) % k === 0)) count++;
//         }
//     }
//     return count;
// }

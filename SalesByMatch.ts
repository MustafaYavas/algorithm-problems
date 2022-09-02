const sockMerchant = (n: number, ar: number[]): number => {
	let pair = 0;
	const pairMap = new Map<number, number>();
	for (let i = 0; i < ar.length; i++)
		if (pairMap.has(ar[i])) {
			pair++;
			pairMap.delete(ar[i]);
		} else pairMap.set(ar[i], ar[i]);

	return pair;
};

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));


// JAVASCRIPT
// const sockMerchant = (n, ar) => {
//     let pair = 0;
//     const pairMap = new Map();
//     for(let i=0; i<ar.length; i++)
//         if(pairMap.has(ar[i])) {
//             pair++;
//             pairMap.delete(ar[i])
//         }
//         else pairMap.set(ar[i], ar[i])

//     return pair;
// }

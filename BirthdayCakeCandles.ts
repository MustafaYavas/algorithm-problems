const birthdayCakeCandles = (candles: number[]): number => {
	const sortedArr = candles.sort((a, b) => b - a);
	const max = sortedArr[0];
	let numOfTallest = 1;

	for (let i = 1; i < sortedArr.length; i++) {
		if (max === sortedArr[i]) numOfTallest++;
		else break;
	}
	return numOfTallest;
};

console.log(birthdayCakeCandles([3]));


// JAVASCRIPT
// const birthdayCakeCandles = (candles) => {
//     const sortedArr = candles.sort((a,b) => b-a);
//     const max = sortedArr[0];
//     let numOfTallest = 1;

//     for(let i=1; i<sortedArr.length; i++) {
//         if(max === sortedArr[i]) numOfTallest++;
//         else break;
//     }
//     return numOfTallest;
// }

const chocolateFeast = (n: number, c: number, m: number): number => {
	let barCount = ~~(n / c);
	let wrappers = ~~(n / c);

	while (wrappers > 0 && wrappers >= m) {
		let quo = ~~(wrappers / m);
		let rem = wrappers % m;
		wrappers = quo + rem;
		barCount += quo;
	}

	return barCount;
};

console.log(chocolateFeast(7, 3, 2));


// JAVASCRIPT
// const chocolateFeast = (n, c, m) => {
// 	let barCount = ~~(n / c);
// 	let wrappers = ~~(n / c);

// 	while (wrappers > 0 && wrappers >= m) {
// 		let quo = ~~(wrappers / m);
// 		let rem = wrappers % m;
// 		wrappers = quo + rem;
// 		barCount += quo;
// 	}

// 	return barCount;
// };
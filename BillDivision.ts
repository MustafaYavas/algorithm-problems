const bonAppetit = (bill: number[], k: number, b: number): void => {
	bill.splice(k, 1);
	let total = 0;
	bill.map((num) => {
		total += num;
	});

	if (total / 2 < b) console.log(b - total / 2);
	else console.log('Bon Appetit');
};

bonAppetit([3, 10, 2, 9], 1, 12);


// JAVASCRIPT
// const bonAppetit = (bill, k, b) => {
// 	bill.splice(k, 1);
// 	let total = 0;
// 	bill.map((num) => {
// 		total += num;
// 	});

// 	if (total / 2 < b) console.log(b - total / 2);
// 	else console.log('Bon Appetit');
// };

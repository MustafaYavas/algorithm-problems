const cases = [
	[0, 3],
	[4, 6],
	[6, 7],
	[3, 5],
	[0, 7],
];

const serviceLane = (n: number[], cases: number[][]): void => {
	let segment: number[] = [];

	for (let i = 0; i < cases.length; i++)
		segment.push(Math.min(...n.slice(cases[i][0], cases[i][1] + 1)));

	console.log(...segment);
};

serviceLane([2, 3, 1, 2, 3, 2, 3, 3], cases);


// JAVASCRIPT
// const serviceLane = (n, cases) => {
// 	let segment = [];

// 	for (let i = 0; i < cases.length; i++)
// 		segment.push(Math.min(...n.slice(cases[i][0], cases[i][1] + 1)));

// 	console.log(...segment);
// };
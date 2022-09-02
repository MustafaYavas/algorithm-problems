const countApplesAndOranges = (s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void => {
	let applesInHouse = 0;
	let orangesInHouse = 0;

	apples.map((apple) => {
		if (s <= apple + a && apple + a <= t) applesInHouse++;
	});

	oranges.map((orange) => {
		if (s <= orange + b && orange + b <= t) orangesInHouse++;
	});

	console.log(applesInHouse);
	console.log(orangesInHouse);
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);


//  JAVASCRIPT
//  const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
// 	let applesInHouse = 0;
// 	let orangesInHouse = 0;

// 	apples.map((apple) => {
// 		if (s <= apple + a && apple + a <= t) applesInHouse++;
// 	});

// 	oranges.map((orange) => {
// 		if (s <= orange + b && orange + b <= t) orangesInHouse++;
// 	});

// 	console.log(applesInHouse);
// 	console.log(orangesInHouse);
// };

const catAndMouse = (x: number, y: number, z: number): string => {
	if (Math.abs(x - z) > Math.abs(y - z)) return 'Cat B';
	else if (Math.abs(x - z) < Math.abs(y - z)) return 'Cat A';
	else return 'Mouse C';
};

console.log(catAndMouse(1, 2, 3));


// JAVASCRIPT
// const catAndMouse = (x, y, z) => {
//     if(Math.abs(x-z) > Math.abs(y-z)) return 'Cat B';
//     else if(Math.abs(x-z) < Math.abs(y-z)) return 'Cat A';
//     else return 'Mouse C';
// }
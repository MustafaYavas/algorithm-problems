const appendAndDelete = (s: string, t: string, k: number): string => {
    let max = s.length + t.length;
	if (k > max) return 'Yes';
	let len = s.length > t.length ? t.length : s.length;

	for (let i = 0; i < len; i++) {
		if (s[i] !== t[i]) break;
		max -= 2;
	}

	return max > k || (k - max) % 2 !== 0 ? 'No' : 'Yes';
}

console.log(appendAndDelete('abcd', 'abcdert', 10));


// JAVASCRIPT
// const appendAndDelete = (s, t, k) => {
// 	let max = s.length + t.length;
// 	if (k > max) return 'Yes';
// 	let len = s.length > t.length ? t.length : s.length;

// 	for (let i = 0; i < len; i++) {
// 		if (s[i] !== t[i]) break;
// 		max -= 2;
// 	}

// 	return max > k || (k - max) % 2 !== 0 ? 'No' : 'Yes';
// };

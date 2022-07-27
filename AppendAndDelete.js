s = 'abcd';
t = 'abcdert';
k=10;

const appendAndDelete = (s, t, k) => {
    let max = s.length + t.length;
    if (k > max) return 'Yes'
    let len = s.length>t.length ? t.length : s.length;
    
    for(let i = 0; i<len;i++) {
        if(s[i] !== t[i]) break;
        max -= 2;
    }
   
    return max > k || (k - max) % 2 !== 0 ? 'No' : 'Yes'
}

console.log(appendAndDelete(s, t, k));
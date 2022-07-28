const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const aVeryBigSum = (ar) => {
    let result = 0;
    ar.forEach(num => {
        result += num;
    });
    return result;
}

console.log(aVeryBigSum(ar));

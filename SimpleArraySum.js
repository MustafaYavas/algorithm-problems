ar = [1,2,3];

const simpleArraySum = (ar) => {
    let result = 0;
    ar.forEach(el => {
        result += el;
    });
    return result;
}

console.log(simpleArraySum(ar));
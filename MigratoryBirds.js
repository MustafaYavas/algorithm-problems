arr = [1, 4, 4, 4, 5, 3];
arr2 = [1, 2, 3, 4, 5, 4, 3 ,2 ,1, 3, 4];

const migratoryBirds = (arr) => {
    let max = 1;
    let count = 0;
    let sortedArr = arr.sort();
    let type = sortedArr[0];
    
    for(let i=0; i<sortedArr.length; i++) { 
        count = (sortedArr[i] === sortedArr[i-1]) ? count + 1 : 0;
        if (count > max) {
            type = sortedArr[i];
            max = count;
        }
    }
    return type;
} 

console.log(migratoryBirds(arr2));

arr = [5, 4, 4, 2, 2, 8];

const cutTheSticks = (arr) => {
    let numbers = [];
    let sorted = arr.sort((a, b) => a-b);
    let min = sorted[0];

    numbers.push(sorted.length)

    while(sorted.length > 0) {
        let newArr = [];
        
        for(let i=0; i<sorted.length; i++) 
            if(sorted[i] > min) newArr.push(sorted[i]-min);
        
        sorted = newArr;
        sorted = newArr.sort((a, b) => a-b);
        min = sorted[0];

        if(sorted.length>0) numbers.push(sorted.length)
    }

    return numbers;
}

console.log(cutTheSticks(arr));
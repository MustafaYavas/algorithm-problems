arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
    let posProportion = 0;
    let negProportion = 0;
    let zeroProportion = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) posProportion += 1/arr.length;
        else if(arr[i] < 0) negProportion += 1/arr.length;
        else zeroProportion += 1/arr.length;
    }
    
    console.log(posProportion.toFixed(6),'\n',negProportion.toFixed(6),'\n',zeroProportion.toFixed(6));
}

plusMinus(arr);
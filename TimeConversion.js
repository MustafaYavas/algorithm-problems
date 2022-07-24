s = '12:01:00AM';

const timeConversion = (s) => {
    let hour = s.slice(0,2);

    if(s.substring(s.length-2, s.length) === 'PM') {
        if(parseInt(hour) < 12) {
            hour = parseInt(hour) + 12;
            s = hour + s.substring(2, s.length-2);
        } 
        else s = hour + s.substring(2, s.length-2);
        
    } else {
        if(parseInt(hour) < 12) s = hour + s.substring(2, s.length-2);
        else {
            hour = parseInt(hour) - 12;
            s = hour + '0' + s.substring(2, s.length-2);
        }
    }

    return s;
}

console.log(timeConversion(s));
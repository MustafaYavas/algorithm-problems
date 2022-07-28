bill = [3,10,2,9];
k = 1;
b = 12;

const bonAppetit = (bill, k, b) => {
    bill.splice(k,1);
    let total = 0;
    bill.map(num => {
        total += num;
    })
    
    if(total/2 < b) console.log(b-(total/2));
    else console.log('Bon Appetit');
}

bonAppetit(bill, k, b);
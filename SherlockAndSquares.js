const squares = (a, b) =>  {
    let down = Math.round(Math.sqrt(a));
    let up = Math.round(Math.sqrt(b));

    if(down*down < a) down++;
    if(up*up > b) up--;

    return (up-down)+1;
}

console.log(squares(3, 9));
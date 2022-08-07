x = 1;  // cat a
y = 2;  // cat b
z = 3;  // mouse

catAndMouse = (x, y, z) => {
    if(Math.abs(x-z) > Math.abs(y-z)) return 'Cat B';
    else if(Math.abs(x-z) < Math.abs(y-z)) return 'Cat A';
    else return 'Mouse C';
}

console.log(catAndMouse(x, y, z));
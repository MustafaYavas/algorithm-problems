s = 7;  // starting point of Sam's house location
t = 11; // ending point of Sam's house location
a = 5;  // location of the Apple tree.
b = 15; // location of the Orange tree.
apples = [-2, 2, 1]; // distances at which each apple falls from the tree
oranges = [5, -6];   // distances at which each orange falls from the tree    

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let applesInHouse = 0;
    let orangesInHouse = 0;

    apples.map(apple => {
        if(s<=(apple + a) && (apple + a)<=t) applesInHouse++;
    });

    oranges.map(orange => {
        if(s<=(orange + b) && (orange + b)<=t) orangesInHouse++;
    })

    console.log(applesInHouse);
    console.log(orangesInHouse);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
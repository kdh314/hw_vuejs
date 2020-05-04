function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function callback(a, b) {
    if ( a % 2 != 0 && b % 2 != 0)

    console.log(a + ", " + b);
    return a + b;
}


let array = [];
for (let i = 0; i < 100; i++)
    array.push(random(1, 101));

console.log(array);

let sum = array.reduce(callback);

console.log(sum)

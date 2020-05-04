function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function odd_accumlator(accum, current) {
    if (current % 2 == 0)
        accum += current;
    return accum;
}

let array = [];
for (let i = 0; i < 100; i++)
    array.push(random(1, 101));

console.log(array);

let sum = array.reduce(odd_accumlator);

console.log(sum)

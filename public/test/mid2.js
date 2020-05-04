function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let array = [];
for (let i = 0; i < 100; i++)
    array.push(random(0, 100));

array.sort(function (a, b) { return b - a });

console.log(array);
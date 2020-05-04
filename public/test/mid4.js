function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

function test_sum(cb) {
    let arr = [];

    for (let i = 0; i < 5; i++)
        arr.push(random(0, 11));

    console.log("Random: " + arr);
    console.log("Total: " + cb(arr));
}

for (let i = 0; i < 5; i++)
    test_sum(sum);
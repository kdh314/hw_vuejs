let arr = [];
let count = 0;
let sum = 0;
let avg = 0.0;

for (let i = 0; i < arr.length; ++i) {
    arr[i] = Math.floor(Math.random()*100 + 1)
    sum += arr[i];
    count ++;
  }

avg = sum / count;

console.log(avg); 
let persons1 = [];
let index = 3;

for (let i = 0; i < index; i++){
    persons1[i] = { name: "홍길동", age: 16 + i }
}

let persons2 
persons2 = persons1;

persons1[0].age = 20;
console.log(persons1)
console.log(persons2)



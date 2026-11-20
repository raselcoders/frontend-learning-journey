const king ={Name: "Ashrafull Islam Rasel", age:"23", height:"5.10 inch"};
Object.freeze(king)
delete king.age;
console.log(king);
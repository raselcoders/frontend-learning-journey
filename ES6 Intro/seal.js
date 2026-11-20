const king ={Name: "Ashrafull Islam Rasel", age:"23", height:"5.10 inch"};
Object.seal(king)
delete king.age; // No Delete
king.Name="Rasel";

console.log(king);

// seal korle delete and add kora jay nah but modify kora jay . 
const func = (num1, num2) => num1+num2;
console.log(func(20,30));



 const result = (a,b) => {
    const sum= (a+b);
    const sub= (a-b);
    const multi = (a*b);
    const div=(a/b);
    return {sum, sub,multi,div}
 }
 console.log(result(10,20));
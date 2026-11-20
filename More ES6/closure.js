function OuterFunction (){
    let count = 0;
    function innerFunction (){
        count = count + 1;
        console.log("value of Count", count);
    }
    return innerFunction; 
}

const output = OuterFunction();
output();
output();
output();
output();
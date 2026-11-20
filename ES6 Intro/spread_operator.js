// // // Spread Operator. 
// // const max = Math.max(10,33,44,556,777,33,2);
// // console.log(`max value is: ${max}`);


// // const min = Math.min(10,33,44,556,777,33,2);
// // console.log(`min value is: ${min}`);


// // const Ele= [10,33,455,77,33];
// // const max1 =Math.max(...Ele)  spred_operator

// // console.log(Ele);
// // console.log(...Ele);
// // console.log(max1);
// // console.log(typeof(Ele));



// const ele = [10,33,335]; //array 

// const func = (a,b,c) => a+b+c;
// const result = func(...ele);
// const result2 = func(ele);

// console.log(result2);
// console.log(result);

// console.log(typeof(result));
// console.log(typeof(result2));

// const arr1 = [10,23,55,5];
// const arr2 = arr1
// arr2.push(33)
// console.log(`${arr1} and ${arr2}`);

// const arr3 = [10,23,55,5];
// const arr4 = [...arr1, 23]
// arr2.push(33)
// console.log(`${arr3} and ${arr4}`);

// const obj1 ={name:"Md Shawon islam ", age:"22", height:"5.09 inch"};

// const obj2 ={name:"Ashrafull Islam ", age:"23", height:"5.10 inch"};

// const obj3={obj1, obj2};
// console.log(obj3);


const obj1 ={name:"Md Shawon islam ", age:"22", height:"5.09 inch"};
const obj2 = {...obj1};
obj2.salary = 44000;
console.log(obj2);

const obj3 ={name:"Md Shawon islam ", age:"22", height:"5.09 inch"};
const obj4 = {...obj3};
obj4.salary = 44000;
console.log(obj4);



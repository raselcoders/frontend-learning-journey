object 
const student ={
    name: "Ashrafull Islam Rasel",
    University: "Daffodil International University",
    Department: "Software Engineering Department.",
    '1': "Desk One",
    'library-key': "345",

    familly:{Member: "8 person", Male: "5", Women: "3"}

};
// console.log(student['name']);  // way 01
// console.log(student.name);    // way 02

// console.log(student['1']);

// const uni = 'University'  //way 03
// console.log(student[uni]);

// // const fmly = student.familly  // full object
// // console.log(fmly);
// console.log(student.familly);


console.log(student.familly?.Member?.Male);


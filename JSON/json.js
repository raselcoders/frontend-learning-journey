// // console.log("Explore JSON");

// // // JSON.stringify -> josn file or string convert kore. 
// // // JSON.parse -> json file or string ke object e  covert kore. 

// // const rasel ={
// //     Name: "Ashraful Islam Rasel",
// //     Versity: "Daffodil International University",
// //     Department: "Software Engineering",
// //     id:"241-35-244",
// //     cgpa:["3.70","3.92","3.65","3.45","3.82","3.22"],
// //     isgood: true,
// //     tuition_fee: 50000,

// // };
// // console.log(rasel);

// // const trans =JSON.stringify(rasel);  // convert json or string. 
// // console.log(trans);
// // console.log(typeof(trans));  // output stirng. 


// // const convert_object =JSON.parse(trans) // convert object.  
// // console.log(convert_object);




// const loadData = () =>{

//     fetch('https://jsonplaceholder.typicode.com/todos/1').then((resp)=> resp.json()).then((data)=> console.log(data));


// }

// const loadPost =() =>{
//     const url ="https://jsonplaceholder.typicode.com/posts";

//     fetch(url).then((respon)=>respon.json()).then((data)=>{
//         console.log(data);
//         displaypost(data);
//     });

// }

// const displaypost =(posts) =>{
//     posts.forEach((post =>{
//         console.log(post);
//     }))

// }; 
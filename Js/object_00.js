const obj1={
    Subject_name:'Computer Science',
    Teacher:'Ashrafull Islma Rasel',
    dayAndTime:['sat','sun','Mon','3:00 PM'],
    class:["Eleven","Twelve"],
    chapter:{
        subject:'fundamental of Computer science',
        exam:"Sunday",
        time:"11:30 am"
    }

}
obj1.Subject_name="Data Structure and Algorithm";  // value change by dot notation. 
console.log(obj1.Subject_name);
obj1['Teacher']="Ratul Islam";  // value change by bracket notaion. 
console.log(obj1['Teacher'])

console.log("Exam Time: "+obj1.chapter.time);  //Dot notation.
console.log("Exam Day: "+obj1.chapter["exam"]); //bracket notaion.

obj1["class"]=["Nine","Ten"];  
console.log(obj1.class);

console.log(obj1);
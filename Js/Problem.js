
const students = [
  { id: 244, Name: "Ashrafull Islam Rasel", Section: "A,A1-Lab", Department: "B.Sc in Software Engineering" },
  { id: 245, Name: "Nusrat Jahan", Section: "A,A1-Lab", Department: "B.Sc in CSE" },
  { id: 246, Name: "Rahim Uddin", Section: "A,A2-Lab", Department: "B.Sc in Software Engineering" },
  { id: 247, Name: "Karim Hasan", Section: "B,B1-Lab", Department: "B.Sc in CSE" },
  { id: 248, Name: "Sadia Akter", Section: "B,B2-Lab", Department: "B.Sc in Software Engineering" },
  { id: 249, Name: "Tanvir Ahmed", Section: "C,C1-Lab", Department: "B.Sc in CSE" },
  { id: 250, Name: "Mim Islam", section: "C,C2-Lab", Department: "B.Sc in Software Engineering" },
  { id: 251, Name: "Rakib Hossain", Section: "A,A1-Lab", Department: "B.Sc in CSE" },
  { id: 252, Name: "Jannat Ara", Section: "D,D2-Lab", Department: "B.Sc in Software Engineering" },
  { id: 253, Name: "Shakib Khan", Section: "E,E1-Lab", Department: "B.Sc in CSE" }
];


function findinfo (students,search){
    const matched=[];
    for(const student of students){
        if (student.Department.toLowerCase().includes(search.toLowerCase())){
            matched.push(student);
        }
    }
    return matched;
}

const result =findinfo(students,"software Engineering");
console.log(result);
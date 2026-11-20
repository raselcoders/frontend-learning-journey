// Smart Eligibility Checker Project

// 1. Getting user input (browser based)
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let hasLicense = prompt("Do you have a driving license? (yes/no)").toLowerCase();
let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

// 2. Basic if-else
if (age >= 18) {
  console.log(`${name}, you are an adult.`);
} else {
  console.log(`${name}, you are a minor.`);
}

// 3. Voting eligibility
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are NOT eligible to vote.");
}

// 4. Driving eligibility (nested if + logical operators)
if (age >= 18 && hasLicense === "yes") {
  console.log("You can drive legally.");
} else if (age >= 18 && hasLicense === "no") {
  console.log("You are old enough but need a license.");
} else {
  console.log("You cannot drive yet.");
}

// 5. Job eligibility using ternary operator
let jobStatus = age >= 21 ? "Eligible for job" : "Not eligible for job";
console.log(jobStatus);

// 6. Student discount using logical OR
if (isStudent === "yes" || age < 18) {
  console.log("You get a student discount!");
} else {
  console.log("No discount available.");
}

// 7. Switch statement
let day = prompt("Enter a day (mon, tue, wed, thu, fri, sat, sun):");

switch (day) {
  case "mon":
  case "tue":
  case "wed":
  case "thu":
  case "fri":
    console.log("It's a working day.");
    break;
  case "sat":
  case "sun":
    console.log("It's a weekend!");
    break;
  default:
    console.log("Invalid day entered.");
}

// 8. Function with condition
function checkRetirement(age) {
  if (age >= 60) {
    return "You are eligible for retirement.";
  } else {
    return `You have ${60 - age} years left for retirement.`;
  }
}

console.log(checkRetirement(age));

// 9. Using NOT operator
if (!name) {
  console.log("Name was not entered.");
} else {
  console.log(`Welcome, ${name}!`);
}

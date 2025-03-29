// Initialize the required variables 
let age = 18; // Example age
let genAverage = 85; // Example general average
let grade = 90; // Example grade for the condition
let subject = "DSA"; // Example subject
let faName = "Faculty Name"; // Example faculty name for the loop

// 1. Code Transformation
(age >= 18 && genAverage >= 83)   
    ? console.log("You may enter college, under BSCS program")   
    : console.log("Both conditions may not have met and not allowed to enroll");  

(subject === "DSA" && grade >= 80)   
    ? console.log("You may enroll in application development")   
    : (subject === "Math101" && grade <= 80)   
    ? console.log("You may enroll in calculus")   
    : console.log("You have to enroll in DSA and pass to enroll in AD, Math101 and pass to enroll in calculus");  

if (age >= 18) {  
  console.log("You may register as a voter for elections 2025");  
} else {  
    console.log("You are too young to register as a voter for elections 2025");  
}

if (genAverage >= 85 && genAverage >= 82) {  
  console.log("You may enroll in all course programs");  
} else {  
  console.log("You may only enroll in any course program except CTE, SCJE, CHS");  
}

let i = 0;  
while (i < faName.length) {  
    let c = i + 1;  
    let counterTwo = faName.length - c;  
    console.log(faName);  
    console.log("Iterations Name was Printed: " + i);  
    i++;  
}

// 2. Code Snippet 
let username = prompt("Register your username:"); // Declare a variable to hold the username  
let password = prompt("Register your passcode:"); // Declare a variable to hold the password  
let confirmPassword = prompt("Re-enter your passcode:"); // Declare a variable to hold the re-entered password  

if (password === confirmPassword) { // Compare Registered Password and Re-entered Password  
    // Login process  
    let loginUsername = prompt("Username: "); // Declare a variable to hold the username on Login  
    let loginPassword = prompt("Password: "); // Declare a variable to hold the password on Login  

    if (loginUsername === username) { // Compare registered username and entered username  
        if (loginPassword === password) { // Compare the registered password and entered password  
            alert("Welcome to DSA, " + loginUsername); // Congratulate the user for successful login  
        } else {  
            alert("Incorrect password, re-run the code!"); // Inform the user of the incorrect password  
        }  
    } else {  
        alert("Incorrect username, re-run the code!"); // Inform the user of the incorrect username  
    }  
} else {  
    alert("Password does not match, re-run the code!"); // Inform the user if passwords don't match  
}  

// 3. Coding problem
let name = prompt("Enter your Name:");  
let address = prompt("Enter your address:");  
age = parseInt(prompt("Enter your age:")); // Ensure age is a number  
let classRole = prompt("Enter your class role (officer, student, teacher):");  
let course = prompt("Enter your course (BSCS, BSM, BAEL):");  

// Conditional statement to detect the course  
switch (course.toUpperCase()) {  
    case "BSCS":  
        if (classRole.toLowerCase() === "officer") {  
            alert("You are an officer under the BSCS course.");  
        } else if (classRole.toLowerCase() === "student") {  
            alert("You are a student under the BSCS course.");  
        } else if (classRole.toLowerCase() === "teacher") {  
            alert("You are a teacher teaching the BSCS course.");  
        } else {  
            alert("Invalid Class role for the BSCS course. Default Class Role applied.");  
        }  
        break;  

    case "BSM":  
        if (classRole.toLowerCase() === "officer") {  
            alert("You are an officer under the BSM course.");  
        } else if (classRole.toLowerCase() === "student") {  
            alert("You are a student under the BSM course.");  
        } else if (classRole.toLowerCase() === "teacher") {  
            alert("You are a teacher teaching the BSM course.");  
        } else {  
            alert("Invalid Class role for the BSM course. Default class role applied.");  
        }  
        break;  

    case "BAEL":  
        if (classRole.toLowerCase() === "officer") {  
            alert("You are an officer under the BAEL course.");  
        } else if (classRole.toLowerCase() === "student") {  
            alert("You are a student under the BAEL course.");  
        } else if (classRole.toLowerCase() === "teacher") {  
            alert("You are a teacher teaching the BAEL course.");  
        } else {  
            alert("Invalid class role for the BAEL course. Default class role applied.");  
        }  
        break;  

    default:  
        alert("Invalid course. Default action applied.");  
}  

// Loop for each class role  
// The number of iterations depends on 1/4 of the age input  
let iterations = Math.floor(age / 4); // Calculate iterations based on 1/4 age  
for (let i = 1; i <= iterations; i++) {  
    console.log(`Iteration ${i}: Name - ${name}`);  
}  

// End of the program  
alert("Program Completed!");  
var UserInput = +prompt("Enter a Number")
document.write(`Result <br>
    The Value You Enput is ${UserInput}
    <br> 
    ..................................
    <br> 
    The Value of ++a is ${++UserInput} 
    Now the Value of a is ${UserInput} 
    <be><br><br>
    
 
    The Value of a++ is: ${UserInput++} 
    Now the Value of A is : ${UserInput} 






        The Value of --a is ${--UserInput} 
    Now the Value of a is ${UserInput} 
    <be><br><br>
    
 
    The Value of a-- is: ${UserInput--} 
    Now the Value of A is : ${UserInput} 



       `)



       var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write( ` --a is : 1 </br>
    --b is : 0 </br>
    ++b is: 1 </br>
    b-- is : 1 </br>
    the Total answer of this is </br>
    --a - --b + ++b + b-- : 3 </br>
    because of --a 1 - --b 0 + ++b 1 + b-- 1 = 1-0+1+1 = 3 </br>
    </br>
     Answer is : ${result}
    `)



    // Test 
// a = 2 b = 1
// --a = 1 - --b 0 = 1    +  ++b = 1 + b-- = 1  = 2

// Ask for the user name 

let userName = prompt("Enter your name:");

// Greet the user with their name

document.write(`</br></br></br>
     Hello, " + ${userName} + "!`);




     let sub1 = prompt("Enter the name of the first subject:");
     let sub2 = prompt("Enter the name of the second subject:");
     let sub3 = prompt("Enter the name of the third subject:");
     
     let maxMarksPerSubject = 100;
     let totalMaxMarks = maxMarksPerSubject * 3; 
     
    
     let obtainedMarks1 = prompt("Enter obtained marks for " + sub1 + ":");
     let obtainedMarks2 = prompt("Enter obtained marks for " + sub2 + ":");
     let obtainedMarks3 = prompt("Enter obtained marks for " + sub3 + ":");
     
     obtainedMarks1 = Number(obtainedMarks1);
     obtainedMarks2 = Number(obtainedMarks2);
     obtainedMarks3 = Number(obtainedMarks3);
     
     let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
     let calculatedPercentage = (totalObtainedMarks / totalMaxMarks) * 100;
     
     document.write("<h2>Marks Sheet</h2>");
     document.write("<table border='1'>");
     document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
     document.write("<tr><td>" + sub1 + "</td><td>" + maxMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td></tr>");
     document.write("<tr><td>" + sub2 + "</td><td>" + maxMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td></tr>");
     document.write("<tr><td>" + sub3 + "</td><td>" + maxMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td></tr>");
     document.write("<tr><td colspan='2'><strong>Total Marks Obtained</strong></td><td>" + totalObtainedMarks + " / " + totalMaxMarks + "</td></tr>");
     document.write("<tr><td colspan='2'><strong>Percentage</strong></td><td>" + calculatedPercentage + "%</td></tr>");
     document.write("</table>");
     
// _______________________________


let city = prompt("Enter your city name:");


if (city === "Karachi") {

    document.write("Welcome to the city of lights ");
} else {
 
    document.write(`Welcome to + ${city} </br>` );
}


// ________________________________

let gender = prompt("Enter your gender (male/female):");


if (gender === "male") {
    document.write("Good Morning Sir. </br>");
} else if (gender === "female") {
    document.write("Good Morning Ma'am. </br>");
} else {

    document.write("Good Morning! </br>");
}



// _____________________________________


let signalColor = prompt("Enter the color of the traffic signal (red, yellow, green):");

if (signalColor === "red") {
    document.write("Must Stop");
} else if (signalColor === "yellow") {
    document.write("Ready to Move");
} else if (signalColor === "green") {
    document.write("Move Now");
} else {
    document.write("Invalid color entered. Please enter red, yellow, or green. </br>");
}



// _______________________________





let remainingFuel = prompt("Enter the remaining fuel in your car (in litres): </br>");

if (remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car </br>");
} else {

    document.write("Your fuel level is sufficient </br>");
}




// _____________________________


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}



if("car" < "cat"){
alert("car is smaller than cat");}








____________________________________

// Q6 chat 9 to 11
let firstsubj = prompt(`Enter First Subject Name`);
let secsubj = prompt(`Enter Second Subject Name`);
let thirdsubj = prompt(`Enter Third Subject Name`);

var firstnum = +prompt(`Enter ${firstsubj} Obtain Marks`);
var secnum = +prompt(`Enter ${secsubj} Obtain Marks`);
var thirdnum = +prompt(`Enter ${thirdsubj} Obtain Marks`);

var totalMarksPerSubject = 100;
var totalMarks = totalMarksPerSubject * 3;

// Correctly calculate the total obtained marks
var obtainedMarks = firstnum + secnum + thirdnum;

// Correctly calculate the percentage
var percentage = (obtainedMarks / totalMarks) * 100;

document.write(`Total Marks is: ${totalMarks} <br/>
   Total Obtained Marks is: ${obtainedMarks} <br/>
   Percentage is: ${percentage}% <br/>
`);

// Grade determination based on percentage
if (percentage >= 80) {
    document.write(`Excellent A-One Grade <br/>
        Remarks: Excellent`);
} else if (percentage >= 70) {
    document.write(`Good A Grade <br/>
        Remarks: Good`);
} else if (percentage >= 60) {
    document.write(`Fair B Grade <br/>
        Remarks: You Need to Improve`);
} else if (percentage < 60) {
    document.write(`Fail <br/>
        Remarks: Sorry`);
} else {
    document.write(`Please Enter Valid Number to Check Percentage`);
}



__________________________________



var secretNum = 7
var UserAns = +prompt(` Guess the Number Between 1 to 10 Please Enter Here `)

if (UserAns === 7 )
    document.write(`<h1> Bingo Your Answer Is Corrct Hurray </h1>`)

else if (UserAns === secretNum + 1 || UserAns === secretNum - 1 ){
    document.write(`Close Enough to the Correct Answer`)
}

else if(UserAns >=1 && UserAns <= 10 )
    document.write(`Try Agian Your Answer is Not Correct`)


else(
    document.write(`Please Enter valid Answer Between 1 to 10!`)
)

________________________________________



var EnterNum = +prompt(`Enter number Check Divisible byg 3 or not`)


if (EnterNum % 3 === 0 ) {
    
    document.write(`Number is Divisible By 3`)
}
else{
    document.write(`Number is Not Divisible By 3`)
}

________________________________

var Number = +prompt(`Enter number Check Divisible Even or Odd`)


if (Number % 2 === 0 ) {
    
    document.write(`The Number is Even`)
}
else{
    document.write(`The Number is Odd`)
}

____________________________________



var temperature = +prompt("Please enter the current temperature:");


if (temperature > 40) {
    document.write("It is too hot outside.");
} else if (temperature > 30) {
    document.write("The Weather today is Normal.");
} else if (temperature > 20) {
    document.write("Today's Weather is cool.");
} else if (temperature > 10) {
    document.write("OMG! Today's weather is so Cool.");
} else {
    document.write("The temperature is quite cold.");
}


________________________________



var firstNumber = +prompt("Enter the first number:");


var secondNumber = +prompt("Enter the second number:");


var operation = prompt("Enter the operation you want to perform (+, -, *, /, %):");


var result;


if (operation === "+") {
    result = firstNumber + secondNumber;
    document.write(`Result: ${firstNumber} + ${secondNumber} = ${result}`);
} else if (operation === "-") {
    result = firstNumber - secondNumber;
    document.write(`Result: ${firstNumber} - ${secondNumber} = ${result}`);
} else if (operation === "*") {
    result = firstNumber * secondNumber;
    document.write(`Result: ${firstNumber} * ${secondNumber} = ${result}`);
} else if (operation === "/") {
   
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
        document.write(`Result: ${firstNumber} / ${secondNumber} = ${result}`);
    } else {
        document.write("Error: Division by zero is not allowed.");
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
    document.write(`Result: ${firstNumber} % ${secondNumber} = ${result}`);
} else {
    document.write("Invalid operation. Please enter one of +, -, *, /, %.");
}

            

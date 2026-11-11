//what is conditional statement
//*conditional statement are used to make decisions in javascript based on whether a condition is true or false

//types of conditional statement
// *if statement //executes code when the condition is true
// *if .. else statement // choose b/w two alternatives,
// *else if statement // choose multiple conditions
// *switch statement // select on action on matching value.

// if statement 
//the if statement executes a block of code only when the condition is true
//if (condition){
    //execute code
//}
//vote eligible

//if(age >=18){
 //   console.log("you are eligible to vote");
//}

//if(condition)
//{
    //ture block
//}
//else{
    //false block
//}
//let age=24;
//let mark=45;
//if(mark >=35){
  //  console.log("student pass");
//}
//else{
  //  console.log("failed");
//}

//else.. if statement
//if (condition){
    //first condition
//}else if(condition2){
    //second condition
//}else if(condition3){
    //third condition
//}else{
    //default condition
//}

// let mark=50;
// if(mark>=90){
//     console.log("Grade A");
// }else if(mark>=75){
//     console.log("Grade B");
// }else if(mark>=50){
//     console.log("Grade C");
// }else if (mark>=35){
//     console.log("just pass");
// }else{
//     console.log("Fail");
// }

//logic
//mark=85// ste the mark
//is mark>=90 //false
//is mark >=75 // true

// let username="admin";
// let password="123456";

// if(username === "admiin"){
//     if (password === "123456"){
//         console.log("Login successfull");
//     }else{
//         console.log("Incorrect password");
//     }
// }else{
//     console.log("Incorrect username");
// }

//switch statement
//switch (expression){
   //  case value1:
        //code
     //   break;
    //case value2:
        //code
      //  break; 
   // default:
        //default code
//}

//weekday system
// let paymentMethod="upi";
// switch(paymentMethod){
//     case "cash":
//         console.log("cash payment");
//     break;
//     case "card":
//         console.log("card payment");
//     break;
//     case "upi":
//         console.log("upi payment");
//     break;
    
//     default:
//         console.log("Invalid payment method");
// }

//task
//create an age variable. check whether the person is eligibe to vote 
// let age=16;
// if (age>=18){
//     console.log("Eligible to vote")
// }else{
//     console.log("Not Eligible to vote");
// }

//create a number variable. check whether the number is positive or negative
// let num=-10;
// if (num>0){
//     console.log("Positive");
// }else if(num<0){
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }

//create a mark variable. whether the student passed or failed
// let mark1=20;
// if(mark1>=35){
//     console.log("student pass")
// }else{
//     console.log("Student fail");
// }

//check whether a number is even or odd
// let num1=7;
// if(num1%2==0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

//check whether two numbers are equal or not
// num1=10;
// num2=10;
// if(num1==num2){
//     console.log("Equal");
// }else{
//     console.log("Not equal");
// }

//product discount
// let price = 1000;
// let discount;
// if (price >= 500) {
//     discount = price * 10 / 100;
// }
// else {
//     discount = 0;
// }
// let finalPrice = price - discount;
// console.log("Product Price:", price);
// console.log("Discount:", discount);
// console.log("Final Price:", finalPrice);

// //login status
// let loginstatus=true;
// if (loginstatus==false){
//     console.log("Login successfully");
// }else{
//     console.log("Login failed");
// }

//calculator using switch
// 

//Create a grading system using if...else if
let mark = 85;
if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 75) {
    console.log("Grade B");
}
else if (mark >= 50) {
    console.log("Grade C");
}
else if (mark >= 35) {
    console.log("Just Pass");
}
else {
    console.log("Fail");
}

//Create a discount system based on shopping amount
let amount = 15000;
let discount;
if (amount >= 10000) {
    discount = 20;
}
else if (amount >= 5000) {
    discount = 10;
}
else if (amount >= 2000) {
    discount = 5;
}
else {
    discount = 0;
}
let discountAmount = amount * discount / 100;
let finalAmount = amount - discountAmount;
console.log("Shopping Amount: ₹" + amount);
console.log("Discount: " + discount + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Amount: ₹" + finalAmount);

//Check whether a person is eligible for a driving license and has passed the driving test
let age = 8;
let passedTest = false;
if (age >= 18 && passedTest == true) {
    console.log("Eligible for Driving License");
}
else if (age >= 18 && passedTest == false) {
    console.log("You must pass the driving test");
}
else {
    console.log("Not Eligible for Driving License");
}

//Find the largest of three numbers
let a = 15;
let b = 25;
let c = 35;
if (a > b && a > c) {
    console.log("A is the largest number");
}
else if (b > a && b > c) {
    console.log("B is the largest number");
}
else if (c > a && c > b) {
    console.log("C is the largest number");
}
else {
    console.log("Some numbers are equal");
}

//Create a simple login validation system using nested if
let username = "admin";
let password = "12345";
if (username == "admin") {

    if (password == "12345") {
        console.log("Login Successful");
    }
    else {
        console.log("Incorrect Password");
    }

}
else {
    console.log("Invalid Username");
}
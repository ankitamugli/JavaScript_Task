//Write a program to check wheather the user is eligible to vote or not
let age=Number(prompt('enter the user age:in number'))
if(age>=18){
    console.log("the user is eligible to vote");
}
else{
    console.log("the user is not eligible to vote");
}

//write a program to check weather the user is eligible to drive or not
let age_user=Number(prompt("enter the user age"))
if(age_user>=18){
    console.log("the user is eligible to drive");
}
else{
    console.log("not eligible to drive");
}

to//Write a program  check user by a and b find the biggest number
let a=Number(prompt("enter 1st number"))
let b=Number(prompt("enter 2nd number"))
if(a>b){
    console.log("a is greater than number b");
}
else{
    console.log("b is greater than a");
}

//write a program to check weather the no is +ve or -ve
let a=Number(prompt("enter the number"))
if(a>0){
    console.log("a is +ve number");
}
else{
    console.log("a is -ve number");
}

//write a program to check weather the given phone no is valide or not
let phone_number=Number(prompt("enter phone number")).toString()
if(phone_number.lenght ===10){
    console.log("phone number is validate");
}else{
    console.log("phone number is not validate");
}

//write a program to check weather the given input from the user is string or number
let str=prompt("enter a string")
if(typeof(str)===String(str)){
    console.log("is string");
}
else{
    console.log("it is number");
}

//write a program to check weather current time is good morning ,afternoon,evening
let date=new Date();
let hrs = Date.getHourse()
if(hrs<12){
    console.log("it good morning");
}
else{
    console.log("it is evening");
}

//write a program to check weather the current time is am or pm 
let date=new Date();
let hrs = Date.getHourse()
if(hrs<12){
    console.log(hrs,"it AM");
}
else{
    let x=hrs-12
    console.log(x,"it is PM");
}

//write a program to check weather the input for is even or odd number
let input=Number(prompt("enter the number"))
if(input%2===0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}

//write a program to chech weather the given number from the user is divisible by 3 or not
let x=Number(prompt("enter the number"))
if(x%3===0){
    console.log("the number is divisible");
}
else{
    console.log("number is not divisible");
}

//write a program to check weather the Number divisible by 5 or not
let x=Number(prompt("enter the number"))
if(x%5===0){
    console.log("the number is divisible");
}
else{
    console.log("number is not divisible");
}

//write a program to check weather the given number divisible by 3 and 5
let x=Number(prompt("enter the number"))
if(x%3===0&&x%5===0){
    console.log("the number is divisible");
}
else{
    console.log("number is not divisible");
}


//Write a program to check weather  the given input is 0 or not
let x=Number(prompt("enter the number"))
if(x===0){
    console.log("number is 0");
}
else{
    console.log("number is not 0");
}
//else if condition
if(condition){
    console.log("one");
}else if(condition){
    console.log("two");
}else{
    console.log("default");
}


//Write a program to check weather the user entered number is 0 ,+ve or -ve
let a = Number(prompt("enter the no"))

if(a===0){
    console.log("it is 0");
}
else if(a>0){
   console.log("it is +ve number");
}
else if(a<0){
    console.log("it is -ve number");
}
else{
    console.log("plz provide number");
}

//Write a program to check weather the person is male,female or others
let gender=String(prompt("Enter the gender"))
if(gender==="male"){
    console.log("the person is male");
}
else if(gender==="female"){
    console.log("the person is female");
}else if(gender === "others"){
clg("others")
}
else{
    console.log("plz provide the correct gender");
}

//Write a program to check weather the student is get distinction,First class,second class or fail
let marks = Number(prompt("enter the marks"))
if(marks>100){
    console.log("plz enter the correct marks");
}
else if(marks>=80){
    console.log("Distinction");
}
else if(marks>=70){
    console.log("First class");
}
else if(marks>=60){
    console.log("Second class");
}
else if(marks>=35){
    console.log("pass");
}
else if(marks<35 && marks>0){
    console.log("Fail");
}
else{
    console.log("Invalid marks");
}


//Write a program to check weather the user is eligible to vote or not max age is 120 years
let age=Number(prompt("enter the age"))
if(age>120){
    console.log("Invalid age..plz choose correct age");
}
else if(age>=18){
    console.log("The person is eligible to vote");
}
else if(age<18 && age>0){
    console.log('The person is not eligible to vote');
}else{
    console.log("Invalid");
}

//Write a program to check weather the user has given option of deposite ,withdraw,balance
let user = prompt("enter select option deposite,withdraw,balance").toUpperCase()
if(user === 'D' || user ==='DEPOSITE'){
    console.log("deposite");
}
else if(user === "W" || user === "WITHDRAW"){
    console.log("WITHDRAW");
}
else if(user === "B" || user === "BALANCE"){
    console.log("BALANCE");
}else{
    console.log("Choose the options properly");
}


//Write a program to check weather it good morning,good afternoon,good evening or good night
let now = new Date();
let hour = now.getHours();

if (hour >= 5 && hour < 12) {
    console.log("Good Morning 🌅");
}
else if (hour >= 12 && hour < 17) {
    console.log("Good Afternoon ☀️");
}
else if (hour >= 17 && hour < 21) {
    console.log("Good Evening 🌇");
}
else {
    console.log("Good Night 🌙");
}

//Write a program to check weather what day is today 
let date = new Date;
let day = date.getDay();
if(day===0){
    console.log("it is sunday");
}else if(day===1){
    console.log("monday");
}else if(day===2){
    console.log("it is tuesday");
}else if(day===3){
    console.log("it is wendsday");
}else if(day===4){
    console.log("tursday");
}else if(day===5){
    console.log("friday");
}else if(day===6){
    console.log("saturday");
}


//Write a program to check weather which month is current month
let date=new Date();
let month = date.getMonth();
if(month===0){
    console.log("jan");
}else if(month===1){
    console.log("feb");
}else if(month===2){
    console.log("mar");
}else if(month===3){
    console.log("april");
}else if(month===4){
    console.log("may");
}else if(month===5){
    console.log("june");
}else if(month===6){
    console.log("july");
}else if(month===7){
    console.log("aug");
}else if(month===8){
    console.log("sep");
}else if(month===9){
    console.log("octo");
}else if(month===10){
    console.log("nov");
}else if(month===11){
    console.log("dec");
}else{
    console.log("undefined");
}


//Write a program to check largest of three numbers
let a=Number(prompt("enter the 1st number"))
let b=Number(prompt("enter the 2nd number"))
let c=Number(prompt("enter the 3rd number"))
if(a>b && a>c){
    console.log("a larger value");
}
else if(b>a && b>c){
    console.log("b is larger value");
}
else{
    console.log("c is larger value");
}


//Write a program to check weather the total amount after discount if you buy 50000 and above 5% or 6000 > 6% or 7000>7% if it is <5000 <0% 
let amount = Number(prompt("Enter your amount here.."))
if(amount>=7000){
    console.log("You will get 7% interest");
}
else if(amount >=6000){
    console.log("you will get 6% interest");
}
else if(amount >= 5000){
    console.log("you will get 5% interest");
}
else if(amount >=4000){
    console.log("you will get 4% interest");
}
else if(amount<4000){
    console.log("you will not get interest");
}
else{
    console.log("enter correct amount");
}
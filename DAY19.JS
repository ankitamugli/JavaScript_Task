// //for loop
// //syntax
// // for(start;end;action){
// // }

//write a program to print numbers from range 1 to 10 
for(let i=1; i<= 10;i++){
    console.log(i);
}

//write a program to print numbers from range 1 to 100
for(let i=1;i<=100;i++){
    console.log(i);
}

//write a program to print numbers from range 50 to 100
for(let i=50;i<=100;i++){
    console.log(i);
}

//write a program to print mul of 2 range from 10 to 50 without if condition
for(let i=10;i<=50;i=i+2){
    console.log(i);
}

//Write a program to print mul 5 from range 1 to 100
for(let i=5;i<=100;i=i+5){
    console.log(i);
}

//write a program to print mul 10 range 1 to 1000
for(let i=10;i<=1000;i=i+10){
    console.log(i);
}

//write a program to print tables of 5
let tables=5;
for(let i=1;i<=10;i++){
    console.log(`${tables}*${i}=${i*5}`);
}

//write program to print multiples of user choice
let n=Number(prompt("write your number:"))
if(isNaN(n) || n<0){
    alert("enter the valid number")
}
else{
for(let i=1; i<=10; i++){
    console.log(`${n}*${i}=${n*i}`);
}
}


for(let i=1;i=100;i=i++){
    if(i % 3 ===0 && i % 5 ===0){
        console.log(i,"==== ravishastry");
    }
    else if(i % 3===0){
        console.log(i,"=====ravi");
    }
    else if(i % 5===0){
        console.log(i,"=======shastry");
    }
    else{
        alert("invalid")
    }
}

//How to print the array elements by using for loop
let arr=["apple","banana","mango","grapes","pineapple"]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//WAPT print names of 5 people in the array and print the name in upper case
let people=["ananya","vinutha","anu","vijju","vsk"]
for(let i=0;i<people.length;i++){
    console.log(people[i].toUpperCase());
}

//WATP array of 10 fruits name in which if apple is present make it uppercase
let arr=["apple","banana","mango","grapes","pineapple","chikku","watermelon","orange","custedapple","kivi"]
for(let i=0;i<arr.length;i++){
    if(arr[i] === "apple"){
        console.log(arr[i].toUpperCase());
    }
    console.log(arr[i]);
    }

//WAT print names of 5 students in lowercase names are converted into uppercase
let people=["ananya","vinutha","anu","vijju","vsk"]
let ppl=[]
for(let i=0;i<people.length;i++){
    ppl.push(people[i].toUpperCase());
}
console.log(ppl);

//WAPT the even numbers range from 1 to 20
for(let i=2;i<=10;i=i+2){
    console.log(i);
}

// Write  odd numbers
for(let i=1;i<=10;i=i+2){
    console.log(i);
}

//Write a program array of 10 names in that i want even values in uppercase
let arr=["apple","banana","mango","grapes","pineapple","chikku","watermelon","orange","custedapple","kivi"]
let newArr=[]
for(let i=0;i<arr.length;i=i++){
    if(i %2===0){
        newArr.push(arr[i].toUpperCase());
    }
    console.log(arr[i]);
    }

//Write a to program names of 10 in array and print new array 1st letter of each name and last name should be capital
let arr=["apple","banana","mango","grapes","pineapple","chikku","watermelon","orange","custedapple","kivi"]
let newArr=[]
for(let i=0;i<arr.length;i++){
    let firstchar = arr[i].charAt(0).toUpperCase()
    let middlechar= arr[i].slice(1,arr[i].length-1)
    let lastchar=arr[i].charAt(arr[i].length-1).toUpperCase()
   newArr.push(firstchar +middlechar+ lastchar)
        
    }
    console.log(newArr);

//OR

for(let i=0;i<arr.length;i++){
    let firstchar = arr[i].substring(0,1).toUpperCase()
    let middlechar = arr[i].slice(1,arr[i].length-1)
    let seconchar = arr[i].substring(arr[i].length-1).toUpperCase()
    newArr.push(firstchar+middlechar+seconchar)
}
console.log(newArr);
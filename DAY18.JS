//1️⃣ Convert First Letter to Capital
//Write a program to capitalize the first letter of each word in an array.
let arr=["apple","banana","mango"]
let newArr=[]
for(let i=0;i<arr.length;i++){
    let firstchar=arr[i].charAt(0).toUpperCase()
    let allchar=arr[i].substring(1)
    newArr.push(firstchar+allchar)

}
console.log(newArr);


//2️⃣ Reverse Each Word
//Reverse every string inside an array.
for(let i=0;i<arr.length;i++){
   let reverses=arr[i].split("").reverse().join("")
   newArr.push(reverses)
}
console.log(newArr);


// 3️⃣ Find Longest Word
// Find the longest word in an array.
let arr=["apple","banana","watermelon","mango"]
let newArr=[]
for(i=0;i<arr.length;i++){
    if(arr[i].length>newArr.length){
     newArr=arr[i]
    }
    }
    console.log(newArr);


//4️⃣ Count Total Characters
//Find the total number of characters in all words.
let arr =["apple","banana"]
for(let i=0;i<arr.length;i++){
    let total=(arr[0].length)+(arr[1].length)
    console.log(total);
}

//OR
let arr =["apple","banana"]
let total=0
for(let i=0;i<arr.length;i++){
    total=total + arr[i].length
}
console.log(total);


//5️⃣ Convert All Words to Uppercase
//Convert all array elements into uppercase.
let arr=["apple","banana"]
let newArr=[]
for(let i=0;i<arr.length;i++){
    let upper=arr[i].toUpperCase()
    newArr.push(upper)
}
console.log(newArr);


//6️⃣ Find Words Greater Than 5 Letters
//Print words whose length is greater than 5.
let arr=["apple","banana","mango","watermelon"]
let greater=[]
for(let i=0;i<arr.length;i++){
  if(arr[i].length>5)
    greater.push(arr[i])
    
}
console.log(greater);
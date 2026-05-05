//WAPT TO WRITE THE TABLES A TO B
let first=Number(prompt("enter the number"))
let second=Number(prompt("enter the second"))
if(isNaN(first) || first<0){
    alert("enter proper number")
}
for(let i=first;i<=second;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i}*${j}=${i*j}`);
        // document.write(`<h1>${i}*${j}=${i*j}</h1>`)
    }
    console.log("-----------");
}

//WAPT print an array of 5 names
let arr=['ravi','shashtry','alia','bhat','murnal']
let newArr=[]
let rev=[]
let arr1=[]
for(let i=0;i<arr.length;i++){
    newArr.push(arr[i])
}
    for(let m=arr.length-1;m>=0;m--){
        rev.push(arr[m])
    let x=arr[i]
    let y=" "
    for(let j=m.length-1;j>=0;j--){
        y+=x[j]
    }
    arr1.push(y)
    }
console.log(newArr);
console.log(rev);
console.log(arr1);

//OR

let arr=['ravi','shashtry','alia','bhat','murnal']
let newArr=[]
let rev1=[]
let rev2=[]
for(let m=0;m<=arr.length-1;m++){
    newArr.push(arr[m])
}
console.log(newArr);
for(let i=arr.length-1;i>=0;i--){
    rev1.push(arr[i])
    let word=arr[i]
    let rev =""
    for(let j=word.length-1;j>=0;j--){
        rev=rev+word[j]
    }
    rev2.push(rev)
}
console.log(rev1);
console.log(rev2);


    
//WAPT to print number in reversing order range from 100 to 1
for(let i=100;i>=1;i--){
    console.log(i);
}


//WAPT div by 2 100 to 0 and sum of those number
let sum=0
for(let i=100;i>=1;i--){
    if(i%2===0){
        console.log(i);

        sum=sum+i
    }
}
console.log(sum);

//WAPT WHICH is not divisible by 2 100 to 1 and sum
let sum=0
for(let i=100;i>=1;i--){
    if(i%2!=0){
        console.log(i);

        sum=sum+i
    }
}
console.log(sum);

//WAPT which is 100 to 1 and div by both 3 and 5
let sum=0
for(let i=100;i>=1;i--){
    if(i%3===0 && i%5===0){
        console.log(i);
        sum=sum+i
    }
}
console.log(sum)

// WAPT to print reversing array of 5 names
let arr=["ananya","vijju","vidya","vinutha","anu"]
let newArr=[]
for(let i=arr.length-1;i>=0;i--){
    newArr.push(arr[i]);
}
console.log(newArr);


//WAPT print reversing of string given by the user
let str=String(prompt('enter the number'))
let rev=''
if(isNaN()){
   rev=str.split("").reverse().join("")
 console.log(rev);
}else{
    alert("provide proper string")
}

//OR

let str=String(prompt('enter the number'))
let rev=''
if(isNaN()){
  let x=str.split("")
  console.log(x);
  let b=[]
  for(let i=x.length-1;i>=0;i--){
    b.push(x[i])
  }
  console.log(b.join(""));
}else{
    alert("provide proper string")
}

//OR

let str=String(prompt('enter the number'))
let rev=''
for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
}
console.log(rev);

let str=String(prompt('enter the number'))
const rev=''
for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
}
console.log(rev);


//WAPT reverse an element from the array if ravi shastry is separate
let arr=["bindu","ravi","sanjay","sagar","shastry","punith"]
let newArr=[]
for(let i=0;i<=arr.length-1;i++){
   if(arr[i]==="ravi" || arr[i] ==="shastry"){
    let z=arr[i]
    let z1=""
    for(let j=z.length-1;j>=0;j--){
        z1+=z[j]
    }
    newArr.push(z1.toUpperCase())
   }else{
    newArr.push(arr[i])
   }
}
console.log(newArr);
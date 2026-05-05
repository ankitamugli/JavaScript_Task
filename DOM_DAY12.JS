//IMP Write a Program to prints the words,chacters,numbers and special charcters in differents arrays
let arr = ["hello","ravi","shastry","A","B","c","d",1,2,3,4,5,"!","#", "@","$"];
let newArr = [];
let ch = [];
let no = [];
let spch = [];
for(let i=0;i<=2;i++){
    newArr.push(arr[i])
}
console.log(newArr);
for(let i=3;i<=6;i++){
    ch.push(arr[i])
}
console.log(ch);
for(let i=7;i<=11;i++){
    no.push(arr[i])
}
console.log(no);
for(let i=12;i<=arr.length-1;i++){
    spch.push(arr[i])
}
console.log(spch);

//// OR 
let arr = ["hello","ravi","shastry","A","B","c","d",1,2,3,4,5,"!","#", "@","$"];
for (let i = 0; i <= 2; i++) {
  newArr.push(arr[i]);
}
for (let j = 3; j <= 6; j++) {
  ch.push(arr[j]);
}
for (let m = 7; m <= 11; m++) {
  no.push(arr[m]);
}
for (let n = 12; n <= arr.length - 1; n++) {
  spch.push(arr[n]);
}
console.log(newArr);
console.log(ch);
console.log(no);
console.log(spch);

////OR
let arr = ["hello","ravi","shastry","A","B","c","d",1,2,3,4,5,"!","#", "@","$"];
let result = [];
for(let i = 0; i < arr.length; i=i+ 4){
if(i === 0){
        result.push(arr.slice(0,3))
    }
else if(i === 4){
        result.push(arr.slice(3,7))
    }
else if(i === 8){
        result.push(arr.slice(7,12))
    }
else if(i === 12){
        result.push(arr.slice(12))
    }
}
console.log("Words:", result[0]);
console.log("Characters:", result[1]);
console.log("Numbers:", result[2]);
console.log("Special Characters:", result[3]);


///OR
let arr = ["hello","ravi","shastry","A","B","c","d",1,2,3,4,5,"!","#", "@","$"];
let words=[]
let ch=[]
let num=[]
let spch=[]
for(let i=0;i<arr.length;i++){
 if((arr[i].length-1)>1){
        words.push(arr[i])
    }
else if(!isNaN(arr[i])){
        num.push(arr[i])
    }
else if(("!@#$%^&*(){}[]<>?,.''").includes(arr[i])){
        spch.push(arr[i])
    }
 else{
        ch.push(arr[i])
    }

}
console.log(words)
console.log(ch)
console.log(num)
console.log(spch)


////OR
let arr = ["hello","ravi","shastry","A","B","c","d",1,2,3,4,5,"!","#", "@","$"];
let words=[]
let ch=[]
let num=[]
let spch=[]
for(let i=0;i<arr.length;i++){
    if(arr[i].length>1){
        words.push(arr[i])
    }
    else if(!isNaN(arr[i])){
        num.push(arr[i])
    }
    else if((arr[i]>='A' && arr[i]<='Z') || (arr[i]>='a' && arr[i]<='z')){
        ch.push(arr[i])
    }else{
        spch.push(arr[i])
    }
}
console.log(words);
console.log(num);
console.log(ch);
console.log(spch);
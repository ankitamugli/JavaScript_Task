// let hello = document.getElementsByTagName("button")[0]
// hello.addEventListener("click",()=>{
//     console.log("I am hello");
// });

// let first = document.getElementsByTagName("button")[0]
// first.addEventListener("click",()=>{
//     console.log("I am Apple");
// })

// let second = document.getElementsByTagName("button")[1]
// second.addEventListener("click",()=>{
//     console.log(" i am mango");
// })

// let third = document.getElementsByTagName("button")[2]
// third.addEventListener("click",()=>{
//     console.log("I am pinaaaple");
// })

// let four = document.getElementsByTagName("button")[3]
// four.addEventListener("click",()=>{
//     console.log("I am orange");
// })

// let five =document.getElementsByTagName("button")[4]
// five.addEventListener("click",()=>{
//     console.log(" I am grapes");
// })

// let submit = document.getElementsByTagName("button")[0]
// submit.addEventListener("click",()=>{
//     alert("You have submitted");
//     console.log("I have submitted");
// })

// let h1 = document.getElementsByTagName("h1")[0]
// h1.addEventListener("click",()=>{
//     alert("you have clicked on h1");
//     console.log("you have clicked on h1");
// })

// let h2 = document.getElementsByTagName("h2")[0]
// h2.addEventListener("click",()=>{
//     alert("you have clicked on h2")
//     console.log("you have clicked on h2");
// })

// let h3 = document.getElementsByTagName("h3")[0]
// h3.addEventListener("click",()=>{
//     alert("you have clicked on h3")
//     console.log("you have clicked on h3");
// })

// let p = document.getElementsByTagName("p")[0]
// p.addEventListener("click",()=>{
//     alert("you have clicked on p")
//     console.log("you have clicked on p");
// })

let first = document.getElementsByTagName("input")[0];

let second = document.getElementsByTagName("input")[1];

let third = document.getElementsByTagName("input")[2];

let submit = document.getElementsByTagName("button")[0];

let names = document.getElementsByClassName("n")[0]
let email =  document.getElementsByClassName("e")[0]
submit.addEventListener("click", () => {
    // console.log(first.value.toUpperCase());
    // console.log(second.value.toUpperCase());
    // console.log(third.value);
    names.innerText = first.value.concat(second.value)
    email.innerText= third.value
    // console.log(n,e);
});
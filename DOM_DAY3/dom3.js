let inp = document.getElementById("inp")
let del = document.getElementById("del")
let ac = document.getElementById("ac")
let plu = document.getElementById("plu")
let div =  document.getElementById("div")
let sev =  document.getElementById("sev")
let eig =  document.getElementById("eig")
let nin =  document.getElementById("nin")
let mul =  document.getElementById("mul")
let four =  document.getElementById("four")
let five =  document.getElementById("five")
let six =  document.getElementById("six")
let sub =  document.getElementById("sub")
let one =  document.getElementById("one")
let two =  document.getElementById("two")
let three =  document.getElementById("three")
let dot =  document.getElementById("dot")
let zero =  document.getElementById("zero")
let dzero =  document.getElementById("dzero")
let eqal =  document.getElementById("eqal")

one.addEventListener("click",()=>{
    inp.value += 1;
})

two.addEventListener("click",()=>{
    inp.value +=2;
})

three.addEventListener("click",()=>{
    inp.value +=3;
})

dot.addEventListener("click",()=>{
    inp.value += ".";
})

zero.addEventListener("click",()=>{
    inp.value += 0;
})

dzero.addEventListener("click",()=>{
    inp.value += "00"
})

eqal.addEventListener("click",()=>{
    inp.value = "="
})

del.addEventListener("click",()=>{
    inp.value = inp.value.slice(0,-1)
})

ac.addEventListener("click",()=>{
    inp.value = ""
})

plu.addEventListener("click",()=>{
    inp.value += "+"
})

div.addEventListener("click",()=>{
    inp.value +="/"
})

sev.addEventListener("click",()=>{
    inp.value += 7
})

eig.addEventListener("click",()=>{
    inp.value += 8
})
nin.addEventListener("click",()=>{
    inp.value += 9
})
mul.addEventListener("click",()=>{
    inp.value += "*"
})
four.addEventListener("click",()=>{
    inp.value += 4
})
five.addEventListener("click",()=>{
    inp.value += 5
})
six.addEventListener("click",()=>{
    inp.value += 6
})
sub.addEventListener("click",()=>{
    inp.value += "-"
})
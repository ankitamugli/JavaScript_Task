let h = document.getElementById("h")
let m = document.getElementById("m")
let s = document.getElementById("s")

setInterval(()=>{
    let date =new Date;
   let hrs = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();
//    console.log(`${hrs}hrs: ${min}min:${sec}sec`);
if(hrs >= 12){

    h.innerText = `${hrs} PM`
    m.innerText = min
    s.innerText = sec
} else if(hrs === 12){
    h.innerText = `${hrs} PM`
    m.innerText = min
    s.innerText = sec
}
else{
    h.innerText = `${hrs} AM`
    m.innerText = min
    s.innerText = sec
}

},1000)
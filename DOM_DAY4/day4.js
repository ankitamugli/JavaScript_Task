let pass = document.getElementById("inp");
let btn = document.getElementsByTagName("button");
let num = "1234567890";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let spl_char = "!@#$%^&*()_+<>?:''{}[]+_?>~`<:|";
let all = num + uppercase + lowercase + spl_char;

let passwordLength = 14;
// let password = ""

// let generate = () => {
//     for(let i=0;i<=passwordLength; i++){
//         let random = Math.floor(Math.random()*all.length)
//         password += all[random]
//     }
//     h2.innerHTML = password
// }

const generate = () => {
  let password = "";

  while (passwordLength > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  pass.value = password;
};

let copy = () => {
  if (pass.value.length !== passwordLength) {
    alert("plz generate password");
  } else {
    let con = confirm("Do you want to copy password");
    if (con == true) {
      pass.select();
      navigator.clipboard.writeText(pass.value);
      // document.execCommand("copy")
      alert("Password copied!!");
    }
  }
};
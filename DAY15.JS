// 1️⃣ ATM Machine System
// Create a program where the user can choose:
// Check Balance
// Deposit Money
// Withdraw Money
// Exit

// Rules:
// Initial balance = 5000
// Withdrawal should not exceed balance
// Repeat the program until the user chooses exit.


let again = true;
let balance = 5000;
while (again) {
  console.log("Welcome to the Bank");
  let option = prompt(
    "Select the options... 1. Balance, 2. deposite, 3. withdraw",
  ).toLowerCase();
  if (option === "1" || option === "B" || option === "Balance") {
    console.log("you have selected balance \n balance amount is =", balance);
  }
  if (option === "2" || option === "D" || option === "DEPOSITE") {
    console.log("you have selected deposite");
    let dep = Number(prompt("Enter your deposite amount"));
    if (isNaN(dep)) {
      alert("Enter the proper amount");
    } else {
      balance += dep;
      console.log("your deposite amount is", dep);
      console.log("Your total amount is", balance);
    }
  }
  if (option === "3" || option === "W" || option === "Withdraw") {
    console.log("you have selected withdraw");
    let w = Number(prompt("enter your withdraw amount"));
    if (isNaN(w)) {
      alert("enter the proper amount");
    } else if (w > balance) {
      alert("insufficient balance");
    } else {
      balance -= w;
      console.log("your withdraw amount is", w);
      console.log("your balance amount is", balance);
    }
  } else {
    alert("plz provide proper input");
  }

  again = confirm("do you want to continue!");
}
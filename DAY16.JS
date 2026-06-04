// 2️⃣ Restaurant Order System
// Create a menu system:

// Menu:
// Pizza – 200
// Burger – 120
// Pasta – 150
// Exit

// Requirements:
// User selects food
// Ask quantity
// Calculate total bill
// Allow multiple orders
// Display final bill when exiting

let again =true
let totalBill =0
while(again){
console.log("Welcome to the restaurant");
let menu=prompt("Menu is... 1. Pizza(200Rs), 2. Burger(120Rs), 3. Pasta(150Rs)").toLowerCase()
if(menu=== "1" || menu === "PIZZA"){
    let quant = Number(prompt("enter the Quantity"))
    if(isNaN(quant)){
        alert("Enter the proper quantity of pizza")
    }
    else{
        let price=200*quant
        totalBill+=price
        console.log("Pizza added current bill =",totalBill);
    }
}
else if(menu ==="2" || menu === "BURGER"){
    let quant = Number(prompt("Enter the quantity"))
    if(isNaN(quant)){
        alert("Enter the proper quantity of pizza")
    }
     else{
        let price=120*quant
        totalBill+=price
        console.log("Burger added current bill =",totalBill);
    }
}
else if(menu ==="3"  || menu === "PASTA"){
    let quant = Number(prompt("Enter the quantity"))
    if(isNaN(quant)){
        alert("Enter the proper quantity of pizza")
    }
     else{
        let price=150*quant
        totalBill+=price
        console.log("Pasta added current bill =",totalBill);
    }
}
else{
    alert("Please select a valid menu option");
}
again=confirm("Do you want anything else?")
}
console.log("Your Total bill is",totalBill);
console.log("Thanks for visiting our restarant");
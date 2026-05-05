// 3️⃣ Online Shopping Cart

// Create a simple shopping system.

// Products:
// T-shirt = 500
// Shoes = 2000
// Cap = 250

// Features:
// Add product to cart
// View cart total
// Checkout
let again=true
let totalBill=0
while(again){
console.log("Welcome to the online shopping cart");
let products = prompt("Products are..1. T-Shirt=500Rs, 2. Shoes=2000Rs, 3. Cap=250rs").toLowerCase()
if(products === "1" || products === "T-Shirt"){
    let tshirtquant=Number(prompt("Enter the T-Shirt quantity"))
    if(tshirtquant<0 || isNaN(tshirtquant)){
        alert("Enter the proper quantity")
    }else{
       let price=500*tshirtquant
       totalBill+=price
       console.log("T-Shirt",tshirtquant);
     }
}
else if(products === "2" || products === "Shoes"){
    let shoesquant=Number(prompt("Enter the Shoes quantity"))
    if(shoesquant<0 || isNaN(shoesquant)){
       alert("Enter the proper quantity")  
    }else{
       let price=2000*shoesquant
       totalBill+=price
       console.log("Shoes",shoesquant); 
    }
}
else if(products === "3" || products === "cap"){
    let capquant=Number(prompt("Enter the Cap quantity"))
    if(capquant<0 || isNaN(capquant)){
       alert("Enter the proper quantity")  
    }else{
       let price=250*capquant
       totalBill+=price
       console.log("Cap",capquant); 
    }
}
else{
    alert("Enter the proper products")
}
again=confirm("Do you again anything to shop..!")
}
console.log("your total bill is",totalBill);

let url = "https://dummyjson.com/carts"
let cards = document.getElementsByClassName("cards")[0]
let card1 = document.getElementsByClassName("card1")[0]

let task = async () =>{
   let data =await fetch(url)
   let fd = await data.json()
   console.log(fd);
   fd.carts.map((cart)=>{
    // console.log(cart.carts);
    card1.innerHTML += `
     <div class="card11">
                <h2>id: ${cart.id}</h2>
                <h2>total: ${cart.total}</h2>
                <h2>discounttedTotal: ${cart.discountedTotal}</h2>
                <h2>userId: ${cart.userId}</h2>
                <h2>totalProducts: ${cart.totalProducts}</h2>
                <h2>totalQuality: ${cart.totalQuantity}</h2>
                </div>
    `
    
    console.log(cart.id);
    console.log(cart.total);
    console.log(cart.discountedTotal);
    console.log(cart.userId);
    console.log(cart.totalProducts);
    console.log(cart.totalQuantity);


    cart.products.map((e)=>{
        card1.innerHTML +=`
         <div class="card12">
                    <h2>id: ${e.id}</h2>
                    <h2>title: ${e.title}</h2>
                    <h2>price: ${e.price}</h2>
                    <h2>quantity: ${e.quantity}</h2>
                    <h2>total: ${e.total}</h2>
                    <h2>discountPercentage: ${e.discountPercentage}</h2>
                    <h2>discountedtotal: ${e.discountedTotal}</h2>
                    <img src="${e.thumbnail}" alt="image loading..">
                </div>
        `
        console.log(e.id);
        console.log(e.title);
    })
   })
}
task()
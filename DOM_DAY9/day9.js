let cards = document.getElementsByClassName("cards")[0]

let input = document.getElementById("search")
let submit = document.getElementById("submit")
let url = "https://fakestoreapi.com/products/"
let task = async () =>{
    let data = await fetch(url)
    let fd = await data.json()
    console.log(fd); 
    fd.map((e) =>{

        submit.addEventListener("click",()=>{
            if(input.value > 20 || input.value<=0){
        cards.innerHTML = "<h2>No product Found</h2>";
      } else{
      if(e.id==input.value){ 
          cards.innerHTML += `
        <div class="card1">
            <h1>${e.id}</h1>
            <h2>${e.title}</h2>
            <img src="${e.image}" alt="image loading...">
            <p>${e.description}</p>
            <h3>category: ${e.category}</h3>
            <h3>Price : ${e.price}</h3>
          </div> 
        `
      }
    }
    //  input.value=""
        })
       
    })
    
}
task()
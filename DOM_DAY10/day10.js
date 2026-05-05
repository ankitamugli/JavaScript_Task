// let data = fetch("https://jsonplaceholder.typicode.com/users").then((d)=>{
//     return(d.json());
// }).then((fd)=>{
//     console.log(fd);
// })

// let url = fetch("https://jsonplaceholder.typicode.com/posts").then((d)=>{
//     return(d.json())
// }).then((fd)=>{
//     console.log(fd);
// })

// let url = "https://dummyjson.com/products";
// let data = fetch(url)
//   .then((d) => {
//     return d.json();
//   })
//   .then((fd) => {
//     let data = fd.products
//     data.map((fd)=>{
//         console.log(fd.images);
//     })
//   });

// let url = "https://dummyjson.com/products";
// let data = fetch(url)
//   .then((d) => {
//     return d.json();
//   })
//   .then((fd) => {
//     console.log(fd.data);
//   });


//  let cards = document.getElementsByClassName("cards")[0]
// let url = "https://fakestoreapiserver.reactbd.org/api/products/1";
// let data = fetch(url).then((d)=>{
//   return d.json();
// }).then((fd)=>{
  
//   let data = fd.data
//   // data.map((fd)=>{
//     cards.innerHTML += `
//     <div class="card1">
//                 <h1>${fd._id}</h1>
//                 <h2>${fd.title}</h2>
//                 <img src=${fd.image} alt="image loading...">
//                 <p>${fd.description}</p>
//                 <h3>category: ${fd.category}</h3>
//                 <h3>Price : ${fd.price}</h3>
//             </div>
//     `
//     console.log(fd._id);
//     console.log(fd.brand);
//     console.log(fd.category);
//     console.log(fd.description);
//     console.log(fd.discountedPrice);
//     console.log(fd.image);
//     console.log(fd.isNew);
//     console.log(fd.oldPrice);
//     console.log(fd.price);
//     console.log(fd.rating);
//     console.log(fd.size);
//     console.log(fd.stock);
//   }) 


let cards = document.getElementsByClassName("cards")[0];
let input = document.getElementById("search");
let submit = document.getElementById("submit")

let url = "https://fakestoreapiserver.reactbd.org/api/products";

let data = fetch(url).then((d)=>{ 
  return(d.json())
}).then((fd)=>{
  // console.log(fd);
  let data = fd.data;
  console.log(data);
  data.map((e) =>{
    submit.addEventListener("click",()=>{
      // console.log("clicked");
      if(e._id > 30){
        cards.innerHTML = "<h2>No product Found</h2>";
      } else{
      if(e._id==input.value){

        cards.innerHTML += `
        <div class="card1">
            <h1>${e._id}</h1>
            <h2>${e.title}</h2>
            <img src="${e.image}" alt="image loading...">
            <p>${e.description}</p>
            <h3>category: ${e.category}</h3>
            <h3>Price : ${e.price}</h3>
          </div> 
        `
       }
      // else {
      //   cards.innerHTML = "<h2>No product Found</h2>";
      // } 
      }
    })
  })
})
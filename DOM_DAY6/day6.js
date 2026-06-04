// let submit = document.getElementById("submit")
// let input = document.getElementById("inp")

// let cards = document.getElementsByClassName("cards")[0]
// let url = "https://dummyjson.com/quotes"

// function search(){
// cards.innerHTML = ""
// let data = fetch(url).then((d)=>{
//     return(d.json());
// }).then((fd)=>{
//     let data= fd.quotes
//     console.log(data);
//     data.map((e)=>{
//         if(e.author.toLowerCase().startsWith(input.value)){
//         // let {id,quote,author} = e
//         cards.innerHTML +=`
//         <div class="card1">
//                 <h1>${e.id}</h1>
//                 <h2>${e.quote}</h2>
//                 <h3>author: ${e.author}</h3>
//             </div>
//                 `
//         }
//     })
// })

// }

let submit = document.getElementById("submit");
let input = document.getElementById("inp");

let cards = document.getElementsByClassName("cards")[0];
let url = "https://dummyjson.com/quotes";

let data = fetch(url)
  .then((d) => {
    return d.json();
  })
  .then((fd) => {
    let data = fd.quotes;
    console.log(data);
    data.map((e) => {
      submit.addEventListener("click", () => {
        // console.log("clicked");
        if (
          e.author
            .toLowerCase()
            .includes(input.value.toLowerCase())
        ) {
          let { id, quote, author } = e;
          cards.innerHTML += `
     <div class="card1">
                <h1>${id}</h1>
                <p>${quote}</p>
                <h3>author: ${author}</h3>
            </div>
    `;
        }
      });
    });
  });
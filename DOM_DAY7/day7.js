let url = "https://dummyjson.com/todos";
// let cards = document.getElementsByClassName("cards")[0]
// let data = fetch(url).then((d)=>{
//     return(d.json())
// }).then((fd)=>{
//     // console.log(fd);
//     let data = fd.quotes;
//     console.log(data);
//     data.map((e)=>{
//         let {id,quote,author} = e
//         cards.innerHTML += `
//          <div class="card1">
//                 <h1>${id}</h1>
//                 <p>${quote}</p>
//                 <h3>author: ${author}</h3>
//             </div>
//         `
//     })
// })

let cards = document.getElementsByClassName("cards")[0];
let task = async () => {
  let data = await fetch(url);
  let fd = await data.json();
  console.log(fd);
  fd.todos.map((e) => {
    console.log(e);
    let { id, todo, completed, userId } = e;
    if (e.completed == true) {
      cards.innerHTML += `
      <div class="card1" style=" 
      background: linear-gradient(
        100deg,
        rgb(185, 134, 233),
        rgb(185, 134, 233)
      );">
                <h1>${id}</h1>
                <p>${todo}</p>
                <h2 class="true">${completed}</h2>
                <h3>userId: ${userId}</h3>
            </div>
      `;
    } else {
      cards.innerHTML += `
      <div class="card1" style="  background: linear-gradient(
        100deg,
        rgb(233, 164, 134),
        rgb(232, 159, 107)
      );">
                <h1>${id}</h1>
                <p>${todo}</p>
                <h2 class="true">${completed}</h2>
                <h3>userId: ${userId}</h3>
            </div>
      `;
    }
  });
};
task();
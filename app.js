let items = document.querySelectorAll(".item");
// console.log(items);

// items.forEach((item)=>{
//     item.addEventListener("click",()=>{
//         removeList();
//     item.classList.add("active");
//     })
// })
// function removeList(){
//     items.forEach((item)=>{
//         item.classList.remove("active");
//     })
// }
let actived = document.getElementsByClassName("active");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        console.log(items[i]);
        
        actived[0].className=actived[0].className.replace(" active", " ");
        items[i].className += " active";
  });
}

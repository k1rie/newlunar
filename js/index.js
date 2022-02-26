const download = document.querySelector(".download__text");

const downloadimg = document.querySelector(".download__img");

const menu = document.querySelector(".menumobil__img")

const navmobil = document.querySelector(".navmobil")

var menucheck = false

download.addEventListener("mouseover", () => {
  downloadimg.style.boxShadow = "2px 0px 10px black";
});

download.addEventListener("mouseout", () => {
  downloadimg.style.boxShadow = "none";
});

menu.addEventListener("click",()=>{
if(menucheck === false){
    navmobil.style.display = "flex"
    menucheck = true
}else{
    navmobil.style.display = "none"
    menucheck = false
}
})

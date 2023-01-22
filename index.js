
//build side menu
let sideBar = document.querySelector(".sideMenu");
let openMenu = document.querySelector(".hamburger");
let closedMenu = document.querySelector(".closed");

openMenu.onclick = function(){
    sideBar.classList.add('active');
};
closedMenu.onclick = function(){
    sideBar.classList.remove('active');
};

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
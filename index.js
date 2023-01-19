


//build side menu
let sideBar = document.querySelector("#menuOpen");
let openMenu = document.querySelector(".hamburger");
let closedMenu = document.querySelector(".closedTag");

openMenu.onclick = function(){
    sideBar.classList.add('active');
};
closedMenu.onclick = function(){
    sideBar.classList.remove('active');
};

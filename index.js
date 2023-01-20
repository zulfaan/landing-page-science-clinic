let logo = document.querySelector("#home")
logo.style.fontSize = "2rem"

let enroll = document.querySelector("#enroll")
enroll.style.fontSize = "2rem"

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

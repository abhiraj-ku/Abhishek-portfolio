// hamburger items queryselector
const hamburger = document.querySelector(".Hamburger");
const navMenu = document.querySelector(".nav-menu");
// title text container and child element
const container = document.querySelector(".container");
var childTitle = container.querySelector(".title") 



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

})
// here event listener is added so that if you click on any nav menu item it will close the nav menu list 
document.querySelectorAll(".nav-links").forEach(e => e.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

// dark theme toggle code
var icon = document.getElementById("icon")

// when icon is clicked this fuction is called through onclick method
icon.onclick = function () {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "assets/sun.png"
    }
    else {
        icon.src = "assets/moon.png"
    }

}
// right click is disabled , contextmenu is right click , e.preventDefault is used to prevent default function to call
document.addEventListener('contextmenu', function (e) {
    alert("Inspect Element is Blocked on This Site")
    e.preventDefault();
});

//   title color change after 1 second
function randomColorGenerator() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    
    const randomColor = `rgb(${red},${green},${blue})`;
    


    return randomColor
}
function randomTitleColor(){
    
    childTitle.style.color=randomColorGenerator();
    
}
setInterval(randomTitleColor,2000)


    

     
    

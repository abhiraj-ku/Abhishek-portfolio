const hamburger = document.querySelector(".Hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    
})
document.querySelectorAll(".nav-links").forEach(e =>e.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

var icon = document.getElementById("icon")

icon.onclick = function() {
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/sun.png"
    }
    else{
        icon.src="assets/moon.png"
    }
    
}

document.addEventListener('contextmenu', function(e) {
    alert("Inspect Element is Blocked on This Site")
    e.preventDefault();
  });

const mobileMenuBtn = document.querySelector(".mobile_menu");
const mobileNavMenu = document.querySelector(".nav_menu");
const navLinks = document.querySelectorAll(".nav_list li a");

mobileMenuBtn.addEventListener("click", () => {
    
    mobileNavMenu.classList.toggle("active");

});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNavMenu.classList.remove("active");
    })
});
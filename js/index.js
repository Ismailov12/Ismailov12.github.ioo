"use stict";

const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");

    if (hamburger.classList.contains("hamburger_active")) {
        menu.classList.add("menu_active");
    } else {
        menu.classList.remove("menu_active");

    }
});

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("menu_active");
        hamburger.classList.toggle("hamburger_active");
    })
});
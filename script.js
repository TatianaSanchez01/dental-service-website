'use strict';
const navbar = document.querySelector("[data-navbar]")

const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navbarToggler = document.querySelector("[data-nav-toggler]");

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

const toggleNav = function () {
    navbar.classList.toggle("active");
    navbarToggler.classList.toggle("active");
}

const closeNav = function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
}

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
})

addEventOnElement(navbarToggler, "click", toggleNav);

addEventOnElement(navbarLinks, "click", closeNav)

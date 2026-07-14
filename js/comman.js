/*=========================================
            MOBILE NAVIGATION
=========================================*/

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {

    navToggle.classList.toggle("open");

    navLinks.classList.toggle("open");

    document.body.classList.toggle("menu-open");

});

/*=========================================
        CLOSE MENU WHEN LINK CLICKED
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navToggle.classList.remove("open");

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

    });

});

/*=========================================
        CLOSE MENU ON RESIZE
=========================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 860) {

        navToggle.classList.remove("open");

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

    }

});

/*=========================================
        NAVBAR SCROLL EFFECT
=========================================*/

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

});


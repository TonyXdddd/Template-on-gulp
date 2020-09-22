"use strict";

document.getElementById("general-h").addEventListener("mouseover", function () {
    if (window.innerWidth > 1050) {
        document.getElementById("bg-changed-wrapper").classList.add("section-home_changed-bg");
        document.getElementById("header-wrapper").classList.add("section-home__header_black-separator");
        document.getElementById("section-features").classList.add("app__section-features_changed-bg");

        for (let i = 0; i < 6; i++) {
            document.getElementsByClassName("features__item-text-wrapper")[i].classList.add("features__item-text-wrapper_black-bg");
        }
    }
});

document.getElementById("general-h").addEventListener("mouseout", function () {
    document.getElementById("bg-changed-wrapper").classList.remove("section-home_changed-bg");
    document.getElementById("header-wrapper").classList.remove("section-home__header_black-separator");
    document.getElementById("section-features").classList.remove("app__section-features_changed-bg");

    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("features__item-text-wrapper")[i].classList.remove("features__item-text-wrapper_black-bg");
    }
});

let carouselButton1 = document.getElementById("our-clients-button1");
let carouselButton2 = document.getElementById("our-clients-button2");
let carouselButton3 = document.getElementById("our-clients-button3");

let activeButton = carouselButton1;

carouselButton1.addEventListener("click", function() {
    if (activeButton !== carouselButton1) {
        carousel(activeButton, carouselButton1, "0");
    }
});

carouselButton2.addEventListener("click", function() {
    if (activeButton !== carouselButton2) {
        carousel(activeButton, carouselButton2, "-116.5%");
    }
});

carouselButton3.addEventListener("click", function() {
    if (activeButton !== carouselButton3) {
        carousel(activeButton, carouselButton3, "-233%");
    }
});

function carousel (oldActiveButton, newActiveButton, shiftPercent) {
        oldActiveButton.classList.remove("our-clients__carousel-button_chosen");
        newActiveButton.classList.add("our-clients__carousel-button_chosen");
        document.getElementsByClassName("our-clients__carousel-items")[0].style.transform = `translate(${shiftPercent}, 0)`;
        return activeButton = newActiveButton;
}

document.getElementById("header-wrapper").addEventListener("click", function () {
    document.getElementById("header-wrapper").classList.toggle("section-home__header_open-burger");
    if (document.getElementById("header-wrapper").classList.contains("section-home__header_open-burger") === true &&
        window.innerWidth < 1050) {
            setTimeout(appScrollOff, 400);
    } else {
        appScrollOn();
    }
});

function appScrollOff() {
    return document.getElementById("body").style.overflow = "hidden";
}

function appScrollOn() {
    return document.getElementById("body").style.overflow = "visible";
}


window.addEventListener("scroll", function () {
    document.getElementsByClassName("app__scroll-to-top-btn")[0].style.opacity = "0";
    if (window.scrollY  > (window.innerHeight)) {
        document.getElementsByClassName("app__scroll-to-top-btn")[0].style.opacity = "50%";
    }
});

document.getElementById("scroll-to-top-btn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});


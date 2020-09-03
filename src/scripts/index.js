"use strict";

document.getElementById("general-h").addEventListener("mouseover", function () {
    document.getElementById("bg-changed-wrapper").classList.add("section-home_changed-bg");
    document.getElementById("header-wrapper").classList.add("section-home__header_black-separator");
    document.getElementById("section-features").classList.add("app__section-features_changed-bg");

    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("features__item-text-wrapper")[i].classList.add("features__item-text-wrapper_black-bg");

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
       carousel(carouselButton1, "0");
    }
});

carouselButton2.addEventListener("click", function() {
    if (activeButton !== carouselButton2) {
        carousel(carouselButton2, "-116.5%");
    }
});

carouselButton3.addEventListener("click", function() {
    if (activeButton !== carouselButton3) {
        carousel(carouselButton3, "-233%");
    }
});

function carousel (newActiveButton, shiftPercent) {
        activeButton = newActiveButton;
        document.getElementsByClassName("our-clients__carousel-items")[0].style.transform = `translate(${shiftPercent}, 0)`;
}


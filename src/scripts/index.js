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


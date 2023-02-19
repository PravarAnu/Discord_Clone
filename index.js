document.addEventListener("DOMContentLoaded", () => {
    let hamButton = document.querySelector(".ham-button");
    let collapsibleMenu = document.querySelector(".collapsible-menu");
    let closeIcon = document.querySelector(".close-icon");

    hamButton.addEventListener("click", () => {
        collapsibleMenu.classList.remove("hidden");
    });

    closeIcon.addEventListener("click", () => {
        collapsibleMenu.classList.add("hidden");
    });

});

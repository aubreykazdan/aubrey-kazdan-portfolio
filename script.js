// NAVBAR FUNCTION

const ham = document.querySelector('.navbarToggle');
const menu = document.querySelector('.navList')

// This is to unhide menu
ham.addEventListener('click', toggleMenu);
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
}

const menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach (
    function(menuLink) {
        menuLink.addEventListener('click', toggleMenu);
    }
)
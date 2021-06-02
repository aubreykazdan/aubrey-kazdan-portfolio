// NAVBAR FUNCTION

const ham = document.querySelector('.navbarToggle');
const menu = document.querySelector('.navList')

// This is to unhide menu
ham.addEventListener('click', toggleMenu);
function toggleMenu() {
    if (menu.classList.contains("showMenuDesktop")) {
      menu.classList.remove("showMenuDesktop");
    } else if (menu.classList.contains("showMenuMobile")) {
      menu.classList.remove("showMenuDesktop");
    } else {
      menu.classList.add("showMenuDesktop");
    }
}

const menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach (
    function(menuLink) {
        menuLink.addEventListener('click', toggleMenu);
    }
)


// if (window.matchMedia("(max-width: 3000px)").matches) {
//   menu.classList.add("showMenuDesktop");
// } else if (window.matchMedia("(max-width: 915px)").matches){
//   menu.classList.add("showMenuMobile");
// } else {
//   menu.classList.remove("showMenuDesktop");
//   menu.classList.remove("showMenuMobile");
// }


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

// --------- FUNCTION FOR CHANGING MODAL PICS ---------
const imgOne = document.getElementById("imageOne");
const imgTwo = document.getElementById("imageTwo");
const imgThree = document.getElementById("imageThree");


// FUNCTION FOR MOVIES-TO-Z
function changeImageOneRight() {
  if (imgOne.src.match("./projects/movies1.png")){
    imgOne.src="./projects/movies2.png"
  } else if (imgOne.src.match("./projects/movies2.png")){
    imgOne.src="./projects/movies3.png"
  } else {
    imgOne.src="./projects/movies1.png"
  }
}

function changeImageOneLeft() {
  if (imgOne.src.match("./projects/movies1.png")){
    imgOne.src="./projects/movies3.png"
  } else if (imgOne.src.match("./projects/movies3.png")){
    imgOne.src="./projects/movies2.png"
  } else {
    imgOne.src="./projects/movies1.png"
  }
}


// FUNCTION FOR PODCAST PRIORITIZER
function changeImageTwoRight() {
  if (imgTwo.src.match("./projects/podcast1.png")){
    imgTwo.src="./projects/podcast2.png"
  } else if (imgTwo.src.match("./projects/podcast2.png")){
    imgTwo.src="./projects/podcast3.png"
  } else {
    imgTwo.src="./projects/podcast1.png"
  }
}

function changeImageTwoLeft() {
  if (imgTwo.src.match("./projects/podcast1.png")){
    imgTwo.src="./projects/podcast3.png"
  } else if (imgTwo.src.match("./projects/podcast3.png")){
    imgTwo.src="./projects/podcast2.png"
  } else {
    imgTwo.src="./projects/podcast1.png"
  }
}

// FUNCTION FOR SURVIVING BOOTCAMP

function changeImageThreeRight() {
  if (imgThree.src.match("./projects/surviving1.png")){
    imgThree.src="./projects/surviving2.png"
  } else if (imgThree.src.match("./projects/surviving2.png")){
    imgThree.src="./projects/surviving3.png"
  } else {
    imgThree.src="./projects/surviving1.png"
  }
}

function changeImageThreeLeft() {
  if (imgThree.src.match("./projects/surviving1.png")){
    imgThree.src="./projects/surviving3.png"
  } else if (imgThree.src.match("./projects/surviving3.png")){
    imgThree.src="./projects/surviving2.png"
  } else {
    imgThree.src="./projects/surviving1.png"
  }
}
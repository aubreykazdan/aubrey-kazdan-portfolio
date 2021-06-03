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


// This function hides the nav menu when a link is clicked
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
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPhone 11 6.1 inch display"
  } else if (imgOne.src.match("./projects/movies2.png")){
    imgOne.src="./projects/movies3.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPad 9.7 inch display"
  } else {
    imgOne.src="./projects/movies1.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on a Macbook Pro 16 inch display"
  }
}

function changeImageOneLeft() {
  if (imgOne.src.match("./projects/movies1.png")){
    imgOne.src="./projects/movies3.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPad 9.7 inch display"
  } else if (imgOne.src.match("./projects/movies3.png")){
    imgOne.src="./projects/movies2.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPhone 11 6.1 inch display"
  } else {
    imgOne.src="./projects/movies1.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on a Macbook Pro 16 inch display"
  }
}


// FUNCTION FOR PODCAST PRIORITIZER
function changeImageTwoRight() {
  if (imgTwo.src.match("./projects/podcast1.png")){
    imgTwo.src="./projects/podcast2.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPhone 11 6.1 inch display"
  } else if (imgTwo.src.match("./projects/podcast2.png")){
    imgTwo.src="./projects/podcast3.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPad 9.7 inch display"
  } else {
    imgTwo.src="./projects/podcast1.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on a Macbook Pro 16 inch display"
  }
}

function changeImageTwoLeft() {
  if (imgTwo.src.match("./projects/podcast1.png")){
    imgTwo.src="./projects/podcast3.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPad 9.7 inch display"
  } else if (imgTwo.src.match("./projects/podcast3.png")){
    imgTwo.src="./projects/podcast2.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPhone 11 6.1 inch display"
  } else {
    imgTwo.src="./projects/podcast1.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on a Macbook Pro 16 inch display"
  }
}

// FUNCTION FOR SURVIVING BOOTCAMP
function changeImageThreeRight() {
  if (imgThree.src.match("./projects/surviving1.png")){
    imgThree.src="./projects/surviving2.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPhone 11 6.1 inch display"
  } else if (imgThree.src.match("./projects/surviving2.png")){
    imgThree.src="./projects/surviving3.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPad 9.7 inch display"
  } else {
    imgThree.src="./projects/surviving1.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on a Macbook Pro 16 inch display"
  }
}

function changeImageThreeLeft() {
  if (imgThree.src.match("./projects/surviving1.png")){
    imgThree.src="./projects/surviving3.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPad 9.7 inch display"
  } else if (imgThree.src.match("./projects/surviving3.png")){
    imgThree.src="./projects/surviving2.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPhone 11 6.1 inch display"
  } else {
    imgThree.src="./projects/surviving1.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on a Macbook Pro 16 inch display"
  }
}

// THIS IS JUST FOR FUN
console.log("%cOh hey there :)","color: skyblue; font-family:sans-serif; font-size: 20px");

console.log("%cDid I mention that I'm looking for work?","color: pink; font-family:sans-serif; font-size: 17px");

console.log("%cCause if I didn't mention it already, I AM looking for work. Please hire me 🤓","color: orange; font-family:sans-serif; font-size: 12px");
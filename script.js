// NAVBAR FUNCTION


// This is to unhide menu
const ham = document.querySelector('.navbarToggle');
const menu = document.querySelector('.navList')

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

// --------- FUNCTIONS FOR CHANGING MODAL PICS ---------
const imgOne = document.getElementById("imageOne");
const imgTwo = document.getElementById("imageTwo");
const imgThree = document.getElementById("imageThree");


// FUNCTION FOR MOVIES-TO-Z
function changeImageOneRight() {
  if (imgOne.src.match("./assets/projects/movies1.png")){
    imgOne.src="./assets/projects/movies2.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPhone 11 6.1 inch display"
  } else if (imgOne.src.match("./assets/projects/movies2.png")){
    imgOne.src="./assets/projects/movies3.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPad 9.7 inch display"
  } else {
    imgOne.src="./assets/projects/movies1.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on a Macbook Pro 16 inch display"
  }
}

function changeImageOneLeft() {
  if (imgOne.src.match("./assets/projects/movies1.png")){
    imgOne.src="./assets/projects/movies3.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPad 9.7 inch display"
  } else if (imgOne.src.match("./assets/projects/movies3.png")){
    imgOne.src="./assets/projects/movies2.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on an iPhone 11 6.1 inch display"
  } else {
    imgOne.src="./assets/projects/movies1.png"
    imgOne.alt="A preview of the Movies A-to-Z app displayed on a Macbook Pro 16 inch display"
  }
}


// FUNCTION FOR PODCAST PRIORITIZER
function changeImageTwoRight() {
  if (imgTwo.src.match("./assets/projects/podcast1.png")){
    imgTwo.src="./assets/projects/podcast2.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPhone 11 6.1 inch display"
  } else if (imgTwo.src.match("./assets/projects/podcast2.png")){
    imgTwo.src="./assets/projects/podcast3.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPad 9.7 inch display"
  } else {
    imgTwo.src="./assets/projects/podcast1.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on a Macbook Pro 16 inch display"
  }
}

function changeImageTwoLeft() {
  if (imgTwo.src.match("./assets/projects/podcast1.png")){
    imgTwo.src="./assets/projects/podcast3.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPad 9.7 inch display"
  } else if (imgTwo.src.match("./assets/projects/podcast3.png")){
    imgTwo.src="./assets/projects/podcast2.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on an iPhone 11 6.1 inch display"
  } else {
    imgTwo.src="./assets/projects/podcast1.png"
    imgTwo.alt="A preview of the Podcast Prioritizer app displayed on a Macbook Pro 16 inch display"
  }
}

// FUNCTION FOR SURVIVING BOOTCAMP
function changeImageThreeRight() {
  if (imgThree.src.match("./assets/projects/surviving1.png")){
    imgThree.src="./assets/projects/surviving2.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPhone 11 6.1 inch display"
  } else if (imgThree.src.match("./assets/projects/surviving2.png")){
    imgThree.src="./assets/projects/surviving3.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPad 9.7 inch display"
  } else {
    imgThree.src="./assets/projects/surviving1.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on a Macbook Pro 16 inch display"
  }
}

function changeImageThreeLeft() {
  if (imgThree.src.match("./assets/projects/surviving1.png")){
    imgThree.src="./assets/projects/surviving3.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPad 9.7 inch display"
  } else if (imgThree.src.match("./assets/projects/surviving3.png")){
    imgThree.src="./assets/projects/surviving2.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on an iPhone 11 6.1 inch display"
  } else {
    imgThree.src="./assets/projects/surviving1.png"
    imgThree.alt="A preview of the Surviving Bootcamp app displayed on a Macbook Pro 16 inch display"
  }
}


// THIS FUNCTION IS FOR SCROLL TO TOP BUTTON

//Get the button:
scrollToTop = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// THIS IS JUST FOR FUN
console.log("%cOh hey there :)","color: skyblue; font-family:sans-serif; font-size: 20px");

console.log("%cDid I mention that I'm looking for work?","color: pink; font-family:sans-serif; font-size: 17px");

console.log("%cCause if I didn't mention it already, I AM looking for work. Please hire me 🤓","color: orange; font-family:sans-serif; font-size: 12px");
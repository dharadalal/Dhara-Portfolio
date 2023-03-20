// animation bounce effect:
const bounceLetter = document.querySelectorAll(".bouncing-letters>span");
bounceLetter.forEach((element) => {
  element.addEventListener("mouseover", function (e) {
    bounce(e.target);
  });
});

function bounce(letter) {
  if (!letter.classList.contains("bounce")) {
    letter.classList.add("bounce");
    setTimeout(function () {
      letter.classList.remove("bounce");
    }, 2000);
  }
}

// responsive menu
const menuIcon = document.querySelector(".menu-icon");
const navbarContainer = document.querySelector(".navbar-container");
const navContent = document.querySelector(".nav-content");
const menubarIcon = document.querySelector(".menu-icon>i");
const navbarBackdrop = document.querySelector(".navbar-backdrop");
isMenuOpen = false;
// Drawer open
menuIcon.addEventListener("click", () => {
  if (
    navbarContainer.classList.contains("hide") &&
    navContent.classList.contains("hide")
  ) {
    navbarContainer.classList.remove("hide");
    navContent.classList.remove("hide");
    navContent.classList.add("show");
    menubarIcon.classList.remove("fa-bars");
    menubarIcon.classList.add("fa-close");
    isMenuOpen = true;
  } else {
    closeDrawer();
    isMenuOpen = false;
  }
});

navbarBackdrop.addEventListener("click", closeDrawer);

function closeDrawer() {
  navContent.classList.remove("show");
  navbarContainer.classList.add("hide");
  navContent.classList.add("hide");

  menubarIcon.classList.add("fa-bars");
  menubarIcon.classList.remove("fa-close");
}

const readMore = document.querySelector(".read-btn");

// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var Btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("btn-close");

// When the user clicks the button, open the modal
Btn[0].onclick = function () {
  modal[0].style.display = "block";
};

Btn[1].onclick = function () {
  modal[1].style.display = "block";
};
// When the user clicks on <span> (x), close the modal
closeBtn[0].onclick = function () {
  modal[0].style.display = "none";
};

closeBtn[1].onclick = function () {
  modal[1].style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

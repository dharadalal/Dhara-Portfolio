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
  } else {
    closeDrawer();
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

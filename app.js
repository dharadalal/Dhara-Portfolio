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

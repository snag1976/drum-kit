// detecting button press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// detecting key press
document.addEventListener("keydown", function (event) {
  let keyboardKey = event.key.toUpperCase();
  makeSound(keyboardKey);
  buttonAnimation(keyboardKey);
});

// function on button press or key press
function makeSound(key) {
  switch (key) {
    case "A":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "S":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "D":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "F":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "J":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "K":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "L":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(keyboardKey);
  }
}
// animation on buttonpress or keypress
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("press");
  setTimeout(function () {
    activeButton.classList.remove("press");
  }, 100);
}

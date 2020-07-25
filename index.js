//for drums to make sound when kyboard keys are pressed
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    playAudio(buttonInnerHtml);
    // var currentClass = this.classList;
    // buttonAnimation(currentClass[0]);
  });
}

//for drums to make sound when kyboard keys are pressed
document.addEventListener("keypress", function (event) {
  playAudio(event.key);
});

document.querySelectorAll(".show-keys")[0].addEventListener("mousedown", function () {
  for (var i = 0; i < numberOfDrumButtons; i++) {
    console.log("im inside for loop");
    document.querySelectorAll(".drum")[i].classList.add("make-all-button-visible");
  }
});

document.querySelectorAll(".show-keys")[0].addEventListener("mouseup", function () {
  for (var i = 0; i < numberOfDrumButtons; i++) {
    console.log("im inside for loop");
    document.querySelectorAll(".drum")[i].classList.remove("make-all-button-visible");
  }
});

//funtion to play audio
function playAudio(key) {
  switch (key) {
    case "i":
      var rideCymbal = new Audio("sounds/RideCymbal.mp3");
      rideCymbal.play();
      break;
    case "w":
      var crashCymbal = new Audio("sounds/CymbalCrash.mp3");
      crashCymbal.play();
      break;
    case "a":
      var hiHat = new Audio("sounds/HiHats.mp3");
      hiHat.play();
      break;

    case "o":
      var snare1 = new Audio("sounds/Snaredrum1.mp3");
      snare1.play();
      break;

    case "l":
      var snare2 = new Audio("sounds/Snaredrum2.mp3");
      snare2.play();
      break;

    case " ":
      var baseDrum = new Audio("sounds/BassDrum.mp3");
      baseDrum.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/Tomdrum1.mp3");
      tom1.play();
      break;
    case "e":
      var tom2 = new Audio("sounds/Tomdrum2.mp3");
      tom2.play();
      break;
    default:
      console.log("invalid data");
  }
}

// function buttonAnimation(currentKey) {
//   var activeButton = document.querySelectorAll("." + currentKey);
//   activeButton[0].classList.add("ripple");

//   setTimeout(function () {
//     activeButton[0].classList.remove("ripple");
//   }, 1000);
// }

/** @format */

var btnItem = document.querySelectorAll('.drum');

function btnClick() {
  // this.style.color = 'white';

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  makeAnimation(buttonInnerHTML);
}
for (var i = 0; i < btnItem.length; i++) {
  btnItem[i].addEventListener('click', btnClick);
}

document.addEventListener('keypress', function (e) {
  makeSound(e.key);
  makeAnimation(e.key);
  // console.log(e);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      break;
  }
}

function makeAnimation(currKey) {
  var activeBtn = document.querySelector('.' + currKey);
  activeBtn.classList.add('pressed');

  setTimeout(function () {
    activeBtn.classList.remove('pressed');
  }, 100);
}

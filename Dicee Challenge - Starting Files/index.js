/** @format */

// var randonNumber1 = Math.random;

// random image for left <img>
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImage = 'dice' + randomNumber1 + '.png';

var randomImageSrc = './images/' + randomImage;

var leftImage = document.querySelector('.img1').setAttribute('src', randomImageSrc);

// random image of right <img>

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// var randomImage2 = 'dice' + randomNumber2 + '.png';
var randomImageSrc2 = './images/' + 'dice' + randomNumber2 + '.png';

var rightImage = document.querySelector('.img2').setAttribute('src', randomImageSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerText = '🚩Player 1 Wins!';
}
if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerText = 'Player 2 Wins!🚩';
} else if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerText = 'Draw';
}

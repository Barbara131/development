/** @format */

// alert('Working');

var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePatterns = [];
var userClickedPattern = [];
var level = 0;

var sounds = {
  red: new Audio('./sounds/red.mp3'),
  blue: new Audio('./sounds/blue.mp3'),
  yellow: new Audio('./sounds/yellow.mp3'),
  green: new Audio('./sounds/green.mp3'),
};

function nextSequence(params) {
  userClickedPattern = [];

  level += 1;

  var randomNumber = Math.floor(Math.random() * params.length);
  var randomChosenColors = params[randomNumber];
  gamePatterns.push(randomChosenColors);
  console.log(gamePatterns);

  // Use jQuery to select the button with the same id as the randomChosenColour
  var selectedColor = $('#' + randomChosenColors);
  // console.log(selectedColor.attr('id'));

  // Animate
  selectedColor.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  selectedColor.on('click', function () {
    playSounds(randomChosenColors);
  });
}

// create a variable to store the id of the button clicked.
$('.btn').on('click', function () {
  var userChosenColour = $(this).attr('id');

  userClickedPattern.push(userChosenColour);
  playSounds(userChosenColour);
  animatePress(this);
  console.log(userClickedPattern);
  var lastIndex = userClickedPattern.length - 1;
  checkAnswer(lastIndex);
});

// play sound function..
function playSounds(name) {
  if (sounds[name]) {
    sounds[name].play();
  }
}

function animatePress(currentColor) {
  $(currentColor).addClass('pressed');
  setTimeout(() => {
    $(currentColor).removeClass('pressed');
  }, 100);
}

$(document).on('keypress', function () {
  nextSequence(buttonColors);
  $('h1').text('Level ' + level);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePatterns[currentLevel]) {
    console.log('Success');

    // check if the user has sequence
    if (userClickedPattern.length === gamePatterns.length) {
      console.log('User has finished the sequence');

      // call nextSequence() after 1000 milliseconds
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log('Wrong');
  }

  // console.log(currentLevel);
}

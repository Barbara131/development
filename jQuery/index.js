/** @format */

// how to get a specific element using jQuery
// $('h1').css('color', 'blue');

// console.log($('h1').css('color'));

// adding a class from the css to an element with jQuery
// $('h1').addClass('title');

// adding eventListeners with jQuery...
$('button').click(function () {
  $('h1').addClass('title');
  $('h1').slideToggle();
  //   $('h1').slideUp();
  //   $('h1').slideDown();
  //   $('h1').fadeToggle();
  //   $('h1').fadeOut();
});

// $(document).keypress(function (event) {
//   $('h1').text(event.key);
// });

// NB: jQuery uses methods like ..addClass(), text(), css(), etc

/** @format */

// document.getElementsByClassName('row')
// 1. Get hold of the class rows.
// 2. Add an event listener(click)
// var f = $('.row').click;

const clickedNotifications = [];
let div = $('.row').length - 1;
let notifyNum = $('#notifications-sec .notify-section p').text(`${div}`);
$('textarea').attr('disabled', 'disabled');
let innerImg = $('.inner-content p img');

let exclude = $('#excludeCol');
$('.col').not(exclude).addClass('read');

$('.row .col').click(function () {
  const message = $(this);
  // console.log(message[0]);

  // checks if the message clicked is not in the clickedNotification array

  // we use message[0] other than message because message itself is a (contd. below)
  // jQuery object and for me to access the DOM itself, we use message[0]

  if (!clickedNotifications.includes(message[0])) {
    clickedNotifications.push(message[0]);
    message.removeClass('read');
    message.find(innerImg).hide();
    let remainingClicked = div - clickedNotifications.length;
    notifyNum.text(`${remainingClicked}`);
  }
});

$('#notifications-sec .mark-read').click(function () {
  notifyNum.text('0');
  $('.row .col').removeClass('read');
  innerImg.hide();
});

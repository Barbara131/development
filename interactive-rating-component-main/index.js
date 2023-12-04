/** @format */

var rates = document.querySelectorAll('.circle-rates');
var btn = document.querySelector('a');

// clicking a particular rate

function rateClick() {
  var selectedRate = this.innerHTML;
  // console.log(rateNum);

  localStorage.setItem('rate', selectedRate);
  this.style.backgroundColor = 'hsl(216, 12%, 54%)';
  this.style.color = 'hsl(0, 0%, 100%)';

  setTimeout(() => {
    this.style.backgroundColor = 'hsl(213, 19%, 18%)';
    this.style.color = 'hsl(217, 12%, 63%)';
  }, 1000);
}

// updating the p tag with a new text

function updateThanksStatement() {
  const storedRate = localStorage.getItem('rate');

  var rateShow = document.querySelector('.top-content p');

  if (storedRate && rateShow) {
    // Display the selected rating in the <p> tag

    rateShow.innerText = 'You selected ' + storedRate + ' out of 5';
  }
}
updateThanksStatement();

for (var i = 0; i < rates.length; i++) {
  rates[i].addEventListener('click', rateClick);

  // console.log(rateNum);
}

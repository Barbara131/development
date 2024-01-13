/** @format */

let tip = $('#left-section #tip-select .tips .col');
let tipBill = $('#left-section #bill-sec .input-container #target');
let default_tipAmount = `$0.00`;
let default_totalAmount = default_tipAmount;
let tipAmountResult = $('#right-section .up .row .tip-amount').text(`${default_tipAmount}`);
let totalAmountResult = $('#right-section .up .row .total-amount').text(`${default_totalAmount}`);
let no_Of_People_Entered = $('#left-section #no-of-persons .input-container #target');
let displayError1 = $('#bill-sec #detect-err');
let displayError2 = $('#no-of-persons #detect-error');
let btn_Reset = $('#right-section .down .row');
let clickedTip = null;

tipBill.focus(function () {
  // Clear the input field when it is clicked
  $(this).val('');
  $(this).css('color', 'var(--very-dark-cyan');
  // btn_Reset.on('click', reset_btn, disabled);
  btn_Reset.prop('disabled', false);
  btn_Reset.css('backgroundColor', 'var(--transparent-cyan)', 'color', 'var(--very-dark-cyan)');
});

no_Of_People_Entered.focus(function () {
  // Clear the input field when it is clicked
  $(this).val('');
  $(this).css('color', 'var(--very-dark-cyan');
});

function getBill() {
  let billVal = parseInt(tipBill.val());
  if (isNaN(billVal)) {
    displayError1.text('Enter a valid Number!!');
    return 0;
  } else {
    btn_Reset.prop('disabled', true);
    return billVal;
    // return 0;
  }
}

tipBill.on('change', getBill);
tip.on('click', getTip);

// calculate_totalAmount_person function
function formular_for_calculations(nPeople) {
  let billAmount = getBill();
  // let selectTip = getTip();
  let calTipAmount = ((billAmount * (selectedTip / 100)) / nPeople).toFixed(2);
  tipAmountResult.text(`$${calTipAmount}`);
  let total_AmountPer_Person = (billAmount / nPeople + parseFloat(calTipAmount)).toFixed(2);
  totalAmountResult.text(`$${total_AmountPer_Person}`);
}

let selectedTip = 0;

// getTip function
function getTip() {
  let tipSelect = parseFloat($(this).text());
  console.log(tipSelect);
  if (!isNaN(tipSelect)) {
    let tipClick = $(this);
    selectedTip = tipSelect; //stire the tip selected into a variable in other to access the value...

    colorChangeTip(tipClick);

    clickedTip = tipClick;
    if (clickedTip) {
      clickedTip.css('backgroundColor', 'var(--strong-cyan)', 'color', 'var(--very-dark-cyan)');
    }
  }
}

// color_change_tip
function colorChangeTip(tipClick) {
  tipClick.css('backgroundColor', 'var(--strong-cyan)', 'color', 'var(--very-dark-cyan)');
}

// get number_of_people
function getNoPeople() {
  let noPeople = parseFloat(no_Of_People_Entered.val());
  if (isNaN(noPeople)) {
    displayError2.text('Enter a Number!!');
    btn_Reset.prop('disabled', true);
    return 0;
  } else {
    formular_for_calculations(noPeople);
    btn_Reset.css('backgroundColor', 'var(--strong-cyan)');
    btn_Reset.prop('disabled', false);
    return noPeople;
    // return 0;
  }
}

no_Of_People_Entered.on('change', getNoPeople);

function reset_btn() {
  if (!btn_Reset.prop('disabled')) {
    btn_Reset.css('backgroundColor', 'var(--strong-cyan)');
    tipBill.val('0').css('color', 'var(--grayish-cyan)');
    no_Of_People_Entered.val('0').css('color', 'var(--grayish-cyan)');
    tipAmountResult.text(`${default_tipAmount}`);
    totalAmountResult.text(`${default_totalAmount}`);

    if (clickedTip) {
      clickedTip.css({
        'backgroundColor': 'var(--very-dark-cyan)',
        'color': 'var(--White)',
      });
    }
    // Reset clickedTip to null
    clickedTip = null;
    btn_Reset.prop('disabled', true);
    btn_Reset.css('backgroundColor', 'var(--transparent-cyan)', 'color', 'var(--very-dark-cyan)');
  }
}
btn_Reset.on('click', reset_btn);

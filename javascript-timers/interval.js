var countdownDisplayMessages = [3, 2, 1, 'End.ihbqasilhjbasdfibuhasdilujbasdijbn'];
var $countdownDisplay = document.querySelector('.countdown-display');
var countdownDisplayIndex = 0;
function countdown() {

  if (countdownDisplayIndex < 4) {
    $countdownDisplay.textContent = countdownDisplayMessages[countdownDisplayIndex];
    countdownDisplayIndex++;
  } else {
    clearInterval(countdown);
  }
}
setInterval(countdown, 1000);

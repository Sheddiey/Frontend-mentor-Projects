const advice = document.querySelector('.advice');
const adviceNumber = document.querySelector('.advice-number');
const diceBtn = document.querySelector('.dice');

window.onload = showQuote();


diceBtn.addEventListener("click", (button) => {
  showQuote();
});


function showQuote() {
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then((data) => data.slip)
  .then((data) => {
    adviceNumber.textContent = data.id;
    advice.textContent = data.advice;
  })
  .catch((error) => {
    alert(`Error ${error}`);
  })
};


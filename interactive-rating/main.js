const thankYou = document.querySelector('.box-2');
const rate = document.querySelector('.box-1');
const submit = document.querySelector('.submit');

submit.addEventListener('click', e=> {
  thankYou.style.display = 'block';
  rate.style.display = 'none'
});
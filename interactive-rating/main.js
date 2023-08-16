const buttons = document.querySelectorAll('.buttons button');
const selectedRating = document.querySelector('.selected-rating');
const error = document.querySelector('.eror-msg')
const box2 = document.querySelector('.box-2');
const box1 = document.querySelector('.box-1');
const submit = document.querySelector('.submit');
let selected = "";

butttons.forEach( btn => {
  btn.addEventListener('click', e => {
    removeSelectedClasses();
    selected = e.target.textContent
    e.target.classList.add ("selected")
  })
});

submit.addEventListener('click', e=> {
  if(selected === "") {
    addButtonErrors()
    setTimeout(() => {
      removeButtonErrors()
    }, 3000);
    return
  }

  selectedRating.textContent = `You selected ${selected} out of 5`
  box1.classList.add('hide');
  box2.classList.remove('hide')
});



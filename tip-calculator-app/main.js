const inputs = document.querySelectorAll('input:not([name="custom"])');
const errorMessage = document.querySelector('.error');

const bill = document.querySelector('.bill');
const inputTipPerc = document.querySelector('.input-tip');
const numberOfPeople = document.querySelector('number-people');


inputs.forEach(input => {
    input.addEventListener('invalid', addErrorMessage);

    input.addEventListener('blur', (event) => {
        if(!input.checkValidity()) {
            addErrorMessage();
        }
        else {
            removeErrorMessage();
        }
    });

    input.addEventListener('focus', removeErrorMessage);
});
console.log(inputs)

// functions to add and remove errors
function addErrorMessage () {
    errorMessage.classList.remove('hidden');
};

function removeErrorMessage () {
    errorMessage.classList.add('hidden')
};


const inputs = document.querySelectorAll('input:not([name="custom"])');
const errorMessage = document.querySelector('.error');
const errorMessage1 = document.querySelector('.error1');

const bill = document.querySelector('.bill');
const inputTipPerc = document.querySelector('.input-tip');
const numberOfPeople = document.querySelector('.number-people');

    bill.addEventListener('input', () => {
        const inputValue1 = parseFloat(bill.value);

        if(inputValue1 === 0) {
            errorMessage.classList.remove('hidden')
        } else {
            errorMessage.classList.add('hidden')
        }
    });

    numberOfPeople.addEventListener('input', () => {
        const inputValue2 = parseFloat(numberOfPeople.value)

        if(inputValue2 === 0) {
            errorMessage1.classList.remove('hidden1')
        } else {
            errorMessage1.classList.add('hidden1')
        }
    });



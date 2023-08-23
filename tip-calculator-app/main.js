// Dom elements
const inputBill = document.querySelector('.bill');
const inputCustom = document.querySelector('.input-tip');
const inputPeople = document.querySelector('.number-people');
const btn_5 = document.querySelector('.btn_5');
const btn_10 = document.querySelector('.btn_10');
const btn_15 = document.querySelector('.btn_15');
const btn_25 = document.querySelector('.btn_25');
const btn_50 = document.querySelector('.btn_50');
const btnReset = document.querySelector('.btn-reset');
const showTip = document.querySelector('.show-tip');
const showTotal = document.querySelector('.show-total');
const errorMessage = document.querySelector('.error');
const errorMessage1 = document.querySelector('.error1');

let billAmount, numPeople, customPercent, tipTotal, tipPerson, totalPerson;

// functions
// reset function
function resetBtn () {
 inputBill.value = " ";
 inputPeople.value = " ";
 inputCustom.value = " ";
 showTip.textContent = "$0.00"
 showTotal.textContent = "$0.00"
};

// Activate reset button
inputBill.addEventListener('change', () => {
    billAmount = Number(inputBill.value);
    numPeople = Number(inputPeople.value);

    if (billAmount !==0 ){
       btnReset.removeAttribute("disabled")
    }
});

// error section
    inputBill.addEventListener('input', () => {
        const inputValue1 = parseFloat(inputBill.value);

        if(inputValue1 === 0) {
            errorMessage.classList.remove('hidden')
            inputBill.classList.add('border-error')
        } else {
            errorMessage.classList.add('hidden')
            inputBill.classList.remove('border-error')
        }
    });

    inputPeople.addEventListener('input', () => {
        const inputValue2 = parseFloat(inputPeople.value)

        if(inputValue2 === 0) {
            errorMessage1.classList.remove('hidden1')
            inputPeople.classList.add('border-error')
        } else {
            errorMessage1.classList.add('hidden1')
            inputPeople.classList.remove('border-error')
        }
    });


// select tip
const percentBtns = [btn_5, btn_10, btn_15, btn_25, btn_50, inputCustom]
let percent = 0;

percentBtns.forEach((btn) => {
 btn.addEventListener("pointerdown", (e) => {
   btn.classList.add("click");
   percentBtns.forEach((btnInner) => {
    if(btnInner !==btn) btnInner.classList.remove("click");
   });

   if (btn.id !==custom) percent = Number(btn.innerHTML);
 });
});

// reset form
btnReset.addEventListener("click", resetBtn);

// calculate tip and total
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener("change", () => {
        billAmount = Number(inputBill.value);
        numPeople = Number(inputPeople.value);
        customPercent = Number(inputCustom.value);

        if (customPercent > 100) {
            alert("percentage cannot be greater than 100");
            resetBtn();
        }

        if (percent === 0) percent = customPercent;

        if (billAmount !==0 && numPeople !==0 && percent !==0) {
            tipTotal = billAmount * (percent / 100);
            tipPerson = tipTotal / numPeople;
            totalPerson = (billAmount + tipTotal) / numPeople;


            showTip.textContent = '$' + tipPerson.toFixed(2);
            showTotal.textContent = '$' + totalPerson.toFixed(2);
        }
    });
});




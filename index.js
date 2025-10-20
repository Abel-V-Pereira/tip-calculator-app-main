const billInput = document.getElementById('bill');
const customInput = document.getElementById('custom');
const peopleInput = document.getElementById('people');
const resetButton = document.querySelector('.reset-button');
const tipButtons = document.querySelectorAll('[data-tip]');
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const errorMessageBill = document.querySelector('.error-message-bill');
const errorMessagePeople = document.querySelector('.error-message-people');
let bill = 0;
let tip = 0;
let people = 0;

billInput.addEventListener('input', (e) => {
    bill = parseInt(e.target.value);
    billSpliter(bill, tip, people);

    if (bill === '') {
        billInput.classList.remove('error');
        billInput.classList.remove('active');
        errorMessageBill.style.display = 'none';
    } else if (bill > 0) {
        billInput.classList.remove('error');
        billInput.classList.add('active');
        billInput.style.outline = 'none';
        errorMessageBill.style.display = 'none';
    } else {
        billInput.classList.add('error');
        billInput.classList.remove('active');
        billInput.style.outline = 'none';
        errorMessageBill.style.display = 'block';
    }
});

customInput.addEventListener('input', (e) => {
    tip = parseInt(e.target.value);
    billSpliter(bill, tip, people);

    tipButtons.forEach(btn => btn.classList.remove('selected'));

    if (tip === '') {
        customInput.classList.remove('error');
        customInput.classList.remove('active');
    } else if (tip > 0) {
        customInput.classList.remove('error');
        customInput.classList.add('active');
        customInput.style.outline = 'none';
    } else {
        customInput.classList.add('error');
        customInput.classList.remove('active');
        customInput.style.outline = 'none';
    }
});

peopleInput.addEventListener('input', (e) => {
    people = parseInt(e.target.value);
    billSpliter(bill, tip, people);
    
    if (people === '') {
        peopleInput.classList.remove('error');
        peopleInput.classList.remove('active');
        errorMessagePeople.style.display = 'none'
    } else if (people > 0) {
        peopleInput.classList.remove('error');
        peopleInput.classList.add('active');
        peopleInput.style.outline = 'none';
        errorMessagePeople.style.display = 'none';
    } else {
        peopleInput.classList.add('error');
        peopleInput.classList.remove('active');
        peopleInput.style.outline = 'none';
        errorMessagePeople.style.display = 'block';
    }
});

resetButton.addEventListener('click', () => {
    billInput.value = '';
    bill = 0;
    customInput.value = '';
    tip = 0;
    peopleInput.value = '';
    people = 0;
    totalAmount.innerText = "$0.00"
    tipAmount.innerText = "$0.00"

    billInput.classList.remove('error');
    billInput.classList.remove('active');
    errorMessageBill.style.display = 'none';
    billInput.style.outline = 'none';
    customInput.classList.remove('error');
    customInput.classList.remove('active');
    customInput.style.outline = 'none';
    peopleInput.classList.remove('error');
    peopleInput.classList.remove('active');
    errorMessagePeople.style.display = 'none';
    peopleInput.style.outline = 'none';
    
    tipButtons.forEach(btn => btn.classList.remove('selected'));

});

tipButtons.forEach(button => button.addEventListener('click', () => {
    tip = parseInt(button.dataset.tip);
    billSpliter(bill, tip, people);
    customInput.value = '';
    customInput.classList.remove('error');
    customInput.classList.remove('active');
    customInput.style.outline = 'none';
    
    tipButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    
}));

function billSpliter(billValue, tipValue, peopleValue) {
    if (billValue < 1 || tipValue < 1 || peopleValue < 1) {
        totalAmount.innerText = "$0.00"
        tipAmount.innerText = "$0.00"
    } else {
        console.log((bill / people) + tip)
        tipAmount.innerText = `$${((tip * bill / 100) / people).toFixed(2)}`
        totalAmount.innerText = `$${(bill / people + (tip / people)).toFixed(2)}`

    }
}

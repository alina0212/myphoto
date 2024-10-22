
// Show phone input if "phone" contact method is selected
document.querySelectorAll('input[name="contact-method"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const phoneInput = document.getElementById('phone-input');
        phoneInput.style.display = this.value === 'phone' ? 'block' : 'none';
    });
});
// Show or hide phone input based on the selected contact method
document.getElementById('phone-contact').addEventListener('change', function () {
    document.getElementById('phone-input').style.display = 'flex';
});

document.getElementById('email-contact').addEventListener('change', function () {
    document.getElementById('phone-input').style.display = 'none';
});



const textInput = document.getElementById('name');
const textPattern = /^[A-Za-z\s]+$/;

const textError = document.getElementById('text-error');
const emailError = document.getElementById('email-error');


const emailInput = document.getElementById('email');
const emailPattern = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const submitButton = document.getElementById('submit-button');


function validateForm() {
    let isValid = true;

    // Перевірка текстового поля
    if (!textPattern.test(textInput.value)) {
        textError.textContent = 'The field should publish only text.';
        isValid = false;
    } else {
        textError.textContent = '';
    }
    // Перевірка електронної пошти
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format (must be at least 2 domains, top domain of 2-4 characters).';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // on or off button
    submitButton.disabled = !isValid;
}


// check when input
textInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);

// if data bed than no form
document.getElementById('form').addEventListener('submit', function (e) {
    if (submitButton.disabled) {
        e.preventDefault();
    }
});

        document.getElementById('date').addEventListener('input', function (e) {
            const input = e.target.value;
            const datePattern = /^([1-9]|[12][0-9]|3[01])\.([1-9]|1[012])\.\d{4}$/;
            const submitButton = document.getElementById('submit-button');
            const errorMessage = document.getElementById('error-message');

            if (!datePattern.test(input)) {
                errorMessage.textContent = 'Incorrect date format (dd.mm.yyyy)';
                submitButton.disabled = true;
                return;
            }

            const parts = input.split('.');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);

            const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            if (day > daysInMonth[month - 1]) {
                errorMessage.textContent = 'Invalid date';
                submitButton.disabled = true;
            } else {
                errorMessage.textContent = '';
                submitButton.disabled = false;
            }
        });

import { openPopupModal } from "./popup-modal";
//openPopupModal();
const conctacsForm = document.querySelector('.contacts-form');
const inputEmail = document.querySelector('.contacts-input');
const inputMessage = document.getElementById('contacts-message');
const inputErrorMessage = document.querySelector('.contacts-error-message');
const checkboxIcon = document.querySelector('.contacts-checkbox-icon');
conctacsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inputEmail.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        inputEmail.style.color = '#E74A3B';
        inputErrorMessage.style.display = 'inline';
        checkboxIcon.style.display = 'none';
    }
    else {
        const formData = {
            email: inputEmail.value,
            message: inputMessage.value
        };
        fetch('https://illusion4044.github.io/MastersCode/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                openPopupModal();
                contactsForm.reset();
                checkboxIcon.style.display = 'none';
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Network error:', error);
        });
    }
})
inputEmail.addEventListener('input', () => {
    inputEmail.style.color = '#292929';
    inputErrorMessage.style.display = 'none';
    if (inputEmail.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        checkboxIcon.style.display = 'block';
    }
    else {
        checkboxIcon.style.display = 'none';
    }
})
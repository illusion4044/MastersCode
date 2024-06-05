import { openPopupModal } from "./popup-modal";
//openPopupModal();
const contactsForm = document.querySelector('.contacts-form');
const inputEmail = document.querySelector('.contacts-input');
const inputMessage = document.getElementById('contacts-message');
const inputErrorEmail = document.querySelector('.contacts-error-email');
const inputErrorMessage = document.querySelector('.contacts-error-message');
const checkboxIconEmail = document.querySelector('.contacts-checkbox-icon-email');
const checkboxIconMessage = document.querySelector('.contacts-checkbox-icon-message');
contactsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inputEmail.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        inputEmail.style.color = '#E74A3B';
        inputErrorEmail.style.display = 'inline';
        checkboxIconEmail.style.display = 'none';
    }
    else if (inputMessage.value.trim() == "") {
        inputErrorMessage.style.display = 'inline';
        checkboxIconMessage.style.display = 'none';
    }
    else {
        const formData = {
            email: inputEmail.value,
            message: inputMessage.value
        };
        fetch('https://formspree.io/f/mvoejbkp', {
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
                checkboxIconEmail.style.display = 'none';
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
    inputErrorEmail.style.display = 'none';
    if (inputEmail.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        checkboxIconEmail.style.display = 'block';
    }
    else {
        checkboxIconEmail.style.display = 'none';
    }
})
inputMessage.addEventListener('input', () => {
    inputErrorMessage.style.display = 'none';
    inputMessage.value = inputMessage.value.replace(/^\s+/, '');
    inputMessage.value = inputMessage.value.replace(/\s{2,}/g, ' ');
    if (inputMessage.value != "") {
        checkboxIconMessage.style.display = 'block';
    }
    else {
        checkboxIconMessage.style.display = 'none';
        
    }
})
//https://formspree.io/forms/mvoejbkp/submissions
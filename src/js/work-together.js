import { openPopupModal } from "./popup-modal";
//openPopupModal();
const form = document.querySelector('.contacts-form');
const inputEmail = document.querySelector('.contacts-input');
const inputErrorMessage = document.querySelector('.contacts-error-message');
const checkboxIcon = document.querySelector('.contacts-checkbox-icon');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inputEmail.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        inputEmail.style.color = '#E74A3B';
        inputErrorMessage.style.display = 'inline';
    }
    else {
        openPopupModal();
    }
})
inputEmail.addEventListener('input', () => {
    inputEmail.style.color = '#292929';
    inputErrorMessage.style.display = 'none';
    if (inputEmail.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        checkboxIcon.style.display = 'block';
    }
})
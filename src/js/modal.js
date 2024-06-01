
// dom element 
const btnClose = document.querySelector('.modal-form-close');
const modal = document.querySelector('.modal-container');
const modalPopup = document.querySelector('.modal-container');
const menuList = document.querySelector('.modal-list');

// add listener
btnClose.addEventListener('click', closeModal)
menuList.addEventListener('click', clickMenu)

// close modal when press key esc
document.addEventListener('keydown', event => {
  if (event.code === "Escape") closeModal()
});

function clickMenu(el) {
    if (el.target.nodeName !== "A") return
    closeModal(modalPopup);
}

function closeModal() {
    modal.classList.remove('is-open');
}

export const openModalMenu = () => {

}
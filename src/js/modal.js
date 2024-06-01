
// dom element 
const btnClose = document.querySelector('.modal-form-close');
const modal = document.querySelector('.modal-container');
const modalPopup = document.querySelector('.modal-container');
const menuList = document.querySelector('.modal-list');

// add listener
btnClose.addEventListener('click', closeModal)
menuList.addEventListener('click', clickMenu)

// close modal when press key esc
// document.addEventListener('keydown', closeModalMenuPresEsc)
function closeModalMenuPresEsc(event) {
    if (event.code !== 'Escape') return 
    closeModal();
    document.removeEventListener('keydown', closeModalMenuPresEsc);
}

function clickMenu(el) {
    if (el.target.nodeName !== "A") return
    closeModal(modalPopup);
}

function closeModal() {
    modal.classList.remove('is-open');
    document.addEventListener('keydown', closeModalMenuPresEsc);
}

// function open mobile-modal-menu-window
export const openModalMenu = () => {
    modal.classList.add('is-open');
}

// smooth page scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
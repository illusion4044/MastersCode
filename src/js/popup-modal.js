// dom element
const popupBtnClose = document.querySelector('.modal-close');
const popupModal = document.querySelector('.popup-container');

// add listener
popupBtnClose.addEventListener('click', closePopupModal);
popupModal.addEventListener('click', closePopupModalWhenClickBackdrop)

function closePopupModalWhenClickBackdrop(e) {
    if(e.currentTarget !== e.target) return
    closePopupModal();
}

function closePopupModal() {
  popupModal.classList.remove('is-open');
  document.removeEventListener('keydown', closePopupModalPresEsc);
}

// function open mobile-modal-menu-window
export const openPopupModal = () => {
  popupModal.classList.add('is-open');
  document.addEventListener('keydown', closePopupModalPresEsc);
};

function closePopupModalPresEsc(event) {
  if (event.code !== 'Escape') return;
  closePopupModal();
}
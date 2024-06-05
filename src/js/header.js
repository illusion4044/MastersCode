import { openModalMenu } from './modal';

const toggleSwitch = document.querySelector('#checkbox');
let currentTheme = localStorage.getItem('theme') || 'light';
const heroList = document.querySelector('.hero-social-list');
const burgerBtn = document.querySelector('.open-menu-icon');

const movingLineTop = document.querySelector('.green-cube');
const movingLineBottom = document.querySelector('.black-cube');

const projectsTitle = document.querySelector('.my-projects-span');
const projectsLoadMoreBtn = document.querySelector('.more-btn');
const benefitsIconsBg = document.querySelector('.benefits-svg');
const contactsEmailInput = document.querySelector('#contacts-email');
const contactsMsgInput = document.querySelector('#contacts-message');
const reviewBtnPrev = document.querySelector('.button-prev');
const reviewBtnNext = document.querySelector('.button-next');
const reviewIconNext = document.querySelector('.icon-next');
const reviewIconBack = document.querySelector('.icon-back');
const modalContainer = document.querySelector('.modal-container');
const modalBtnClose = document.querySelector('.modal-form-close');
const modalBtnIcon = document.querySelector('.modal-btn-icon');
const popupContainer = document.querySelector('.popup-main');
const popupBtnIcon = document.querySelector('.modal-btn-icon');
const popupBtnClose = document.querySelector('.modal-close');

toggleSwitch.addEventListener('change', () => {
  const reviewItem = document.querySelectorAll('.swiper-slide');
  reviewItem.forEach(elem => elem.classList.add('swiper-slide-js'));
  if (toggleSwitch.checked) {
    currentTheme = 'dark';
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    heroList.style.backgroundColor = '#2a2d32';
    burgerBtn.style.fill = '#f0f0f0';
    movingLineTop.style.backgroundColor = '#214136';
    movingLineBottom.style.backgroundColor = '#2a2d32';
    projectsLoadMoreBtn.style.color = '#f0f0f0';
    projectsTitle.style.color = '#f0f0f0';
    benefitsIconsBg.style.backgroundColor = 'rgba(20, 197, 124, 0.1)';
    contactsEmailInput.style.backgroundColor = '#2a2d32';
    contactsEmailInput.style.color = '#f0f0f0';
    contactsMsgInput.style.backgroundColor = '#2a2d32';
    contactsMsgInput.style.color = '#f0f0f0';

    const movingLineBottomDot = document.querySelectorAll('.try-dot-black');
    movingLineBottomDot.forEach(e => e.classList.add('try-dot-black-js'));

    const movingLineBottomDot2 = document.querySelectorAll(
      '.hidden-element-black'
    );
    movingLineBottomDot2.forEach(el =>
      el.classList.add('hidden-element-black-js')
    );

    const projectsVisitBtn = document.querySelectorAll('.visit-btn');
    projectsVisitBtn.forEach(btn => btn.classList.add('visit-btn-js'));

    reviewBtnPrev.style.border = '1px solid #2a2d32';
    reviewBtnNext.style.border = '1px solid #2a2d32';
    reviewIconNext.style.fill = '#f0f0f0';
    reviewIconBack.style.fill = '#f0f0f0';

    modalContainer.style.backgroundColor = '#1E2023';
    modalBtnClose.style.backgroundColor = 'transparent';
    modalBtnIcon.style.fill = '#f0f0f0';
    modalBtnClose.style.stroke = '#f0f0f0';

    popupBtnClose.style.stroke = '#f0f0f0';
    popupBtnClose.style.backgroundColor = '#transparent';

    popupContainer.style.backgroundColor = '#1E2023';

    localStorage.setItem('theme', 'dark');
	  toggleSwitch.checked = true;
	  
  } else {
	  
    currentTheme = 'light';
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    heroList.style.backgroundColor = '#e4e5e6';
    burgerBtn.style.fill = '#292929';
    movingLineTop.style.backgroundColor = '#bcdfd1';
    movingLineBottom.style.backgroundColor = '#e4e5e6';
    projectsTitle.style.color = '#292929';
    benefitsIconsBg.style.backgroundColor = 'rgba(0, 176, 104, 0.1)';

    contactsEmailInput.style.backgroundColor = '#e4e5e6';
    contactsEmailInput.style.color = '#292929';

    contactsMsgInput.style.backgroundColor = '#e4e5e6';
    contactsMsgInput.style.color = '#292929';

    reviewBtnPrev.style.border = 'rgba(41, 41, 41, 0.3)';
    reviewBtnNext.style.border = 'rgba(41, 41, 41, 0.3)';
    reviewIconNext.style.fill = '#292929';
    reviewIconBack.style.fill = '#292929';
    projectsVisitBtn.style.background = '#e4e5e6';

    modalContainer.style.backgroundColor = '#f0f0f0';
    modalBtnIcon.style.fill = '#292929';
    modalBtnClose.style.backgroundColor = 'transparent';
    modalBtnClose.style.stroke = '#292929';

    popupBtnClose.style.stroke = '#292929';
    popupBtnClose.style.backgroundColor = '#transparent';

    popupContainer.style.backgroundColor = '#f0f0f0';
  }
	if
		(toggleSwitch.checked) {
    currentTheme = 'dark';
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    heroList.style.backgroundColor = '#2a2d32';
    burgerBtn.style.fill = '#f0f0f0';
    movingLineTop.style.backgroundColor = '#214136';
    movingLineBottom.style.backgroundColor = '#2a2d32';
    projectsLoadMoreBtn.style.color = '#f0f0f0';
    benefitsIconsBg.style.backgroundColor = 'rgba(20, 197, 124, 0.1)';
    contactsEmailInput.style.backgroundColor = '#2a2d32';
    contactsEmailInput.style.color = '#f0f0f0';
    contactsMsgInput.style.backgroundColor = '#2a2d32';
    contactsMsgInput.style.color = '#f0f0f0';
    reviewBtnPrev.style.border = '1px solid #2a2d32';
    reviewBtnNext.style.border = '1px solid #2a2d32';
    reviewIconNext.style.fill = '#f0f0f0';
    reviewIconBack.style.fill = '#f0f0f0';
    projectsVisitBtn.style.background = '#2a2d32';

    modalContainer.style.backgroundColor = '#1E2023';
    modalBtnClose.style.backgroundColor = 'transparent';
    modalBtnIcon.style.fill = '#f0f0f0';
    modalBtnClose.style.stroke = '#f0f0f0';

    popupContainer.style.backgroundColor = '#1E2023';
    //  popupBtnIcon.style.stroke = '#f0f0f0';
    popupBtnClose.style.stroke = '#f0f0f0';
    popupBtnClose.style.backgroundColor = '#transparent';

	  localStorage.setItem('theme', 'dark');
	  
  } else {
	  
    currentTheme = 'light';
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    heroList.style.backgroundColor = '#e4e5e6';
    burgerBtn.style.fill = '#292929';
    movingLineTop.style.backgroundColor = '#bcdfd1';
    movingLineBottom.style.backgroundColor = '#e4e5e6';

    projectsTitle.style.color = '#292929';
    projectsLoadMoreBtn.style.color = '#292929';

    benefitsIconsBg.style.backgroundColor = 'rgba(0, 176, 104, 0.1)';
    contactsEmailInput.style.backgroundColor = '#e4e5e6';
    contactsEmailInput.style.color = '#292929';
    contactsMsgInput.style.color = '#292929';
    contactsMsgInput.style.backgroundColor = '#e4e5e6';

    reviewBtnPrev.style.border = 'rgba(41, 41, 41, 0.3)';
    reviewBtnNext.style.border = 'rgba(41, 41, 41, 0.3)';
    reviewIconNext.style.fill = '#292929';
    reviewIconBack.style.fill = '#292929';
    projectsVisitBtn.style.background = '#e4e5e6';

    modalContainer.style.backgroundColor = '#f0f0f0';
    modalBtnIcon.style.fill = '#292929';
    modalBtnClose.style.backgroundColor = 'transparent';
    modalBtnClose.style.stroke = '#292929';

    popupContainer.style.backgroundColor = '#f0f0f0';
    //  popupBtnIcon.style.stroke = '#292929';
    popupBtnClose.style.stroke = '#292929';
    popupBtnClose.style.backgroundColor = '#transparent';

    localStorage.setItem('theme', 'light');
  }
});
burgerBtn.addEventListener('click', openModalMenu);

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

toggleSwitch.addEventListener('change', () => {
  const reviewItem = document.querySelectorAll('.swiper-slide');
  reviewItem.forEach(elem => elem.classList.add('swiper-slide-js'));
  if (currentTheme === 'dark') {
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

    toggleSwitch.checked = true;
  } else {
    document.body.classList.add('light-mode');
    heroList.style.backgroundColor = '#e4e5e6';
    burgerBtn.style.fill = '#292929';
    movingLineTop.style.backgroundColor = '#bcdfd1';
    movingLineBottom.style.backgroundColor = '#e4e5e6';
    projectsTitle.style.color = '#292929';
    benefitsIconsBg.style.backgroundColor = 'rgba(0, 176, 104, 0.1)';
    reviewItem.style.backgroundColor = '#e4e5e6';

    contactsEmailInput.style.backgroundColor = '#e4e5e6';
    contactsEmailInput.style.color = '#292929';

    contactsMsgInput.style.backgroundColor = '#e4e5e6';
    contactsMsgInput.style.color = '#292929';
  }
  if (toggleSwitch.checked) {
    currentTheme === 'dark';
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

    localStorage.setItem('theme', 'dark');
  } else {
    currentTheme === 'light';
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    heroList.style.backgroundColor = '#e4e5e6';
    burgerBtn.style.fill = '#292929';
    movingLineTop.style.backgroundColor = '#bcdfd1';
    movingLineBottom.style.backgroundColor = '#e4e5e6';

    projectsTitle.style.color = '#292929';
    projectsLoadMoreBtn.style.color = '#292929';

    benefitsIconsBg.style.backgroundColor = 'rgba(0, 176, 104, 0.1)';
    reviewItem.style.backgroundColor = '#e4e5e6';
    contactsEmailInput.style.backgroundColor = '#e4e5e6';
    contactsEmailInput.style.color = '#292929';
    contactsMsgInput.style.color = '#292929';

    contactsMsgInput.style.backgroundColor = '#e4e5e6';

    localStorage.setItem('theme', 'light');
  }
});
burgerBtn.addEventListener('click', openModalMenu);

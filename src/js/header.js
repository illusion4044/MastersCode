const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme') || 'light';
const heroList = document.querySelector('.hero-social-list');
const burgerBtn = document.querySelector('.open-menu-icon');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  heroList.style.backgroundColor = '#2a2d32';
  burgerBtn.style.fill = '#f0f0f0';
  toggleSwitch.checked = true;
} else {
  document.body.classList.add('light-mode');
  heroList.style.backgroundColor = '#e4e5e6';
  burgerBtn.style.fill = '#292929';
}

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    heroList.style.backgroundColor = '#2a2d32';
    burgerBtn.style.fill = '#f0f0f0';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    heroList.style.backgroundColor = '#e4e5e6';
    burgerBtn.style.fill = '#292929';
    localStorage.setItem('theme', 'light');
  }
});

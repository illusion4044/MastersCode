const container = document.querySelector('.hero-btn-square');
const link = document.querySelector('.hero-btn');
const arrow = document.querySelector('.hero-btn-icon');

container.addEventListener('click', () => {
  window.location.href = link.href;
});
arrow.addEventListener('click', () => {
  window.location.href = link.href;
});

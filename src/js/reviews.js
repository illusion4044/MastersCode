import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', async () => {
  const buttonNext = document.querySelector('.swiper-button-next');
  const buttonPrev = document.querySelector('.swiper-button-prev');

  if (!buttonNext || !buttonPrev) {
    console.error('Navigation buttons not found');
    return;
  }

  async function fetchReviews() {
    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/reviews'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      alert('Fetch error: ' + error.message);
      console.error('Fetch error:', error);
      return null;
    }
  }

  function createSwiper() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: true,
      breakpoints: {
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 32,
          slideWidth: 704,
        },
        1280: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 32,
          slideWidth: 592,
        },
      },
      on: {
        reachEnd: function () {
          buttonNext.classList.add('disabled');
        },
        reachBeginning: function () {
          buttonPrev.classList.add('disabled');
        },
        fromEdge: function () {
          buttonNext.classList.remove('disabled');
          buttonPrev.classList.remove('disabled');
        },
      },
    });
  }

  function createMarkup(review) {
    return `<li class="swiper-slide review">
      <p class="review-text">${review.review}</p>
      <div class="swiper-img-container">
        <img class="reviews-img" src="${review.avatar_url}" alt="Avatar">
        <h3 class="name">${review.author}</h3>
      </div>
    </li>`;
  }

  async function FetchMarkup(createSwiper, createMarkup) {
    const reviewsList = document.querySelector('#reviews-list');
    if (!reviewsList) {
      console.error('Element #reviews-list not found');
      return;
    }
    const reviews = await fetchReviews();
    if (!reviews) {
      reviewsList.innerHTML = 'Not found';
      return;
    }
    const markup = reviews.map(review => createMarkup(review)).join('');
    reviewsList.innerHTML = markup;
    createSwiper();
  }

  await FetchMarkup(createSwiper, createMarkup);
});

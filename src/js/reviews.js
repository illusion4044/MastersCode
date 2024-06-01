import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const buttonNext = document.querySelector('.swiper-button-next');
const buttonPrev = document.querySelector('.swiper-button-prev');

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
        slidesPerView: 2,
      },
    },
    on: {
      reachEnd: function () {
        document.querySelector('.swiper-button-next').classList.add('disabled');
      },
      reachBeginning: function () {
        document.querySelector('.swiper-button-prev').classList.add('disabled');
      },
      fromEdge: function () {
        document
          .querySelector('.swiper-button-next')
          .classList.remove('disabled');
        document
          .querySelector('.swiper-button-prev')
          .classList.remove('disabled');
      },
    },
  });
}

function createMarkup(review) {
  return `<div class="swiper-slide review">
    <p class="review-text">${review.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${review.avatar_url}" alt="Avatar">
      <h3 class="name">${review.author}</h3>
    </div>
  </div>`;
}

async function FetchMarkup(createSwiper, createMarkup) {
  const reviewsList = document.querySelector('#reviewsList');
  if (!reviewsList) {
    console.error('Element #reviewsList not found');
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

FetchMarkup(createSwiper, createMarkup);

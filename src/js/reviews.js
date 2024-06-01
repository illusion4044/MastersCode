

function createMarkup(review) {
  return `<li class="swiper-slide">
       <p class="review-text">${review.review}</p>
        <div class="swiper-img-container"> <img class="reviews-img" src="${review.avatar_url}" alt="Avatar">
        <h3 class="name">${review.author}</h3>
      </div></li>`;
}

function FetchMarkup(foo, murkUp) {
  const reviewsList = document.querySelector('.reviews-list');
  fetch('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(reviews => {
      const markup = reviews
        .map(review => {
          return murkUp(review);
        })
        .join('');

      reviewsList.innerHTML = markup;
      foo();
    })
    .catch(error => {
      console.error(error);
      reviewsList.innerHTML = 'Not found';
    });
}





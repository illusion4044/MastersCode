



function createMarkup(review) {
  return `<li class="swiper-slide">
    <p class="review-text">${review.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${review.avatar_url}" alt="Avatar">
      <h3 class="name">${review.author}</h3>
    </div>
  </li>`;
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
    console.error('Fetch error:', error);
    return null;
  }
}



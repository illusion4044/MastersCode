import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import { FAQ_ITEMS } from './constants';

const faqUlElement = document.querySelector('.ac-container');
faqUlElement.innerHTML = getInnerHtml(FAQ_ITEMS);
const accordion = new Accordion(faqUlElement, {
  triggerClass: 'arrow-btn',
  duration: 400,
  openOnInit: [0],
});

function getInnerHtml(items) {
  const htmlString = items
    .map(item => {
      return `
      <li class="asked-question-item ac">
        <div class="question-header-container ac-header">
          <h3 class="question">
            ${item.question}
          </h3>
          <div class="arrow-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9L12 15L6 9" stroke="#292929" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <p class="question-answer-p ac-panel">
          ${item.answer}
        </p>
      </li>
      `;
    })
    .join('');
  return htmlString;
}

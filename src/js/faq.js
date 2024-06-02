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
console.log(accordion);

function getInnerHtml(items) {
  console.log(items);
  const htmlString = items
    .map(item => {
      return `
      <li class="asked-question-item ac">
        <div class="question-header-container ac-header">
          <h3 class="question">
            ${item.question}
          </h3>
          <div class="arrow-btn">
            <svg class="accordion-svg" width="32" height="32">
              <use href="../img/symbol-defs.svg#icon-down"></use>
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
  console.log(htmlString);
  return htmlString;
}

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const text = document.querySelector('.ac-container');
console.log(text);
const accordion = new Accordion(text, {
  onOpen: cur => {
    console.log('open', cur);
  },
  onClose: cur => {
    console.log('close', cur);
  },
  triggerClass: 'arrow-btn',
  activeClass: 'asked-question-item-open',
  duration: 400,
  //   openOnInit: [1],
  //   openOnInit: [0],
  //   collapse: false,
});
console.log(accordion);
accordion.closeAll();

// document.addEventListener('DOMContentLoaded', function () {
//   new Accordion('.asked-question-list', {
//     duration: 400,
//     openOnInit: [0],
//     collapse: false,
//     showMultiple: false,
//   });
// });

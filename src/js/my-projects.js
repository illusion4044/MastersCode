import myprojects1_1x from '../img/my-projects_img/desk-myprojects1_1x.jpg';
import myprojects2_1x from '../img/my-projects_img/desk-myprojects2_1x.jpg';
import myprojects3_1x from '../img/my-projects_img/desk-myprojects3_1x.jpg';
import myprojects4_1x from '../img/my-projects_img/desk-myprojects4_1x.jpg';
import myprojects5_1x from '../img/my-projects_img/desk-myprojects5_1x.jpg';
import myprojects6_1x from '../img/my-projects_img/desk-myprojects6_1x.jpg';
import myprojects7_1x from '../img/my-projects_img/desk-myprojects7_1x.jpg';
import myprojects8_1x from '../img/my-projects_img/desk-myprojects8_1x.jpg';
import myprojects9_1x from '../img/my-projects_img/desk-myprojects9_1x.jpg';
import myprojects10_1x from '../img/my-projects_img/desk-myprojects10_1x.jpg';
import myprojects1_2x from '../img/my-projects_img/desk-myprojects1_2x.jpg';
import myprojects3_2x from '../img/my-projects_img/desk-myprojects3_2x.jpg';
import myprojects2_2x from '../img/my-projects_img/desk-myprojects2_2x.jpg';
import myprojects5_2x from '../img/my-projects_img/desk-myprojects5_2x.jpg';
import myprojects4_2x from '../img/my-projects_img/desk-myprojects4_2x.jpg';
import myprojects6_2x from '../img/my-projects_img/desk-myprojects6_2x.jpg';
import myprojects7_2x from '../img/my-projects_img/desk-myprojects7_2x.jpg';
import myprojects8_2x from '../img/my-projects_img/desk-myprojects8_2x.jpg';
import myprojects9_2x from '../img/my-projects_img/desk-myprojects9_2x.jpg';
import myprojects10_2x from '../img/my-projects_img/desk-myprojects10_2x.jpg';

const projects = [
  {
    imageBase_1x: myprojects1_1x,
    imageBase_2x: myprojects1_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Power pulse webservice ',
  },
  {
    imageBase_1x: myprojects2_1x,
    imageBase_2x: myprojects2_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Mimino website',
  },
  {
    imageBase_1x: myprojects3_1x,
    imageBase_2x: myprojects3_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Vyshyvanka vibes Landing Page',
  },
  {
    imageBase_1x: myprojects4_1x,
    imageBase_2x: myprojects4_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Green harvest online store',
  },
  {
    imageBase_1x: myprojects5_1x,
    imageBase_2x: myprojects5_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Wallet webservice',
  },
  {
    imageBase_1x: myprojects6_1x,
    imageBase_2x: myprojects6_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Chego jewelry website',
  },
  {
    imageBase_1x: myprojects7_1x,
    imageBase_2x: myprojects7_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Energy flow webservice ',
  },
  {
    imageBase_1x: myprojects8_1x,
    imageBase_2x: myprojects8_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Fruitbox online store',
  },
  {
    imageBase_1x: myprojects9_1x,
    imageBase_2x: myprojects9_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'English excellence webservice',
  },
  {
    imageBase_1x: myprojects10_1x,
    imageBase_2x: myprojects10_2x,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Starlight studio landing page',
  },
];

const galleryEl = document.querySelector('.my-projects-list');
const moreBtnEl = document.querySelector('.more-btn');

let currentIndex = 0;
const projectsPerPage = 3;

const createProjectMarkup = project => {
  return `
<li class="projects-item">
      <picture>
        <source srcset="${project.imageBase_1x} 1x, ${project.imageBase_2x} 2x" media="(min-width: 1280px)">
        <source srcset="${project.imageBase_1x} 1x, ${project.imageBase_2x} 2x" media="(min-width: 768px)">
        <source srcset="${project.imageBase_1x} 1x, ${project.imageBase_2x} 2x" media="(max-width: 767px)">
        <img class="project-img" src="${project.imageBase_1x}" alt="${project.title}">
      </picture>
      <p class="technologies">${project.technologies}</p>
      <div class="title-btn-wrapper">
        <p class="my-project-title">${project.title}</p>
        <button class="visit-btn" type="button" onclick="window.open('https://github.com/illusion4044/MastersCode', '_blank');">
          Visit
          <svg class="visit-icon" width="24px" height="24px">
             <use href="../img/symbol-defs.svg#icon-icon241"></use>
          </svg>
        </button>
      </div>
    </li>`;
};

const loadProjects = () => {
  const nextIndex = currentIndex + projectsPerPage;
  const projectsToLoad = projects.slice(currentIndex, nextIndex);

  const markup = projectsToLoad.map(createProjectMarkup).join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);

  currentIndex = nextIndex;

  if (currentIndex >= projects.length) {
    moreBtnEl.classList.add('btn-is-hidden');
  }
};

moreBtnEl.addEventListener('click', loadProjects);

loadProjects();

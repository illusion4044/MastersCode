const projects = [
  {
    imageBase: 'myprojects1',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Power pulse webservice ',
  },
  {
    imageBase: 'myprojects2',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Mimino website',
  },
  {
    imageBase: 'myprojects3',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Vyshyvanka vibes Landing Page',
  },
  {
    imageBase: 'myprojects4',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Green harvest online store',
  },
  {
    imageBase: 'myprojects5',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Wallet webservice',
  },
  {
    imageBase: 'myprojects6',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Chego jewelry website',
  },
  {
    imageBase: 'myprojects7',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Energy flow webservice ',
  },
  {
    imageBase: 'myprojects8',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'Fruitbox online store',
  },
  {
    imageBase: 'myprojects9',
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'English excellence webservice',
  },
  {
    imageBase: 'myprojects10',
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
        <source srcset="./img/my-projects_img/desk-${project.imageBase}-1x.jpg 1x, ./img/my-projects_img/desk-${project.imageBase}-2x.jpg 2x" media="(min-width: 1280px)">
          <source srcset="./img/my-projects_img/desk-${project.imageBase}-1x.jpg 1x, ./img/my-projects_img/desk-${project.imageBase}-2x.jpg 2x" media="(min-width: 768px)">
            <source srcset="./img/my-projects_img/desk-${project.imageBase}-1x.jpg 1x, ./img/my-projects_img/desk-${project.imageBase}-2x.jpg 2x" media="(max-width: 767px)">
        <img class="project-img" src="./img/my-projects_img/desk-${project.imageBase}-1x.jpg" alt="${project.title}">
      </picture>
      <p class="technologies">${project.technologies}</p>
      <div class="title-btn-wrapper">
        <p class="my-project-title"> ${project.title} </p>
      <button class="visit-btn" type="button" onclick="window.open('https://github.com/illusion4044/MastersCode', '_blank');">
          Visit
          <svg class="visit-icon" width="24px" height="24px">
          <use href="./img/symbol-defs.svg#icon-icon241"></use>
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

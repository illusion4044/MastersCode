import{A as v,S as b}from"./assets/vendor-2e4332b5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d=document.querySelector("#checkbox"),S=localStorage.getItem("theme")||"light",c=document.querySelector(".hero-social-list"),a=document.querySelector(".open-menu-icon");S==="dark"?(document.body.classList.add("dark-mode"),c.style.backgroundColor="#2a2d32",a.style.fill="#f0f0f0",d.checked=!0):(document.body.classList.add("light-mode"),c.style.backgroundColor="#e4e5e6",a.style.fill="#292929");d.addEventListener("change",()=>{d.checked?(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode"),c.style.backgroundColor="#2a2d32",a.style.fill="#f0f0f0",localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode"),c.style.backgroundColor="#e4e5e6",a.style.fill="#292929",localStorage.setItem("theme","light"))});const k=document.querySelector(".hero-btn-square"),g=document.querySelector(".hero-btn"),j=document.querySelector(".hero-btn-icon");k.addEventListener("click",()=>{window.location.href=g.href});j.addEventListener("click",()=>{window.location.href=g.href});const L=[{question:"What programming languages ​​are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:" What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],h=document.querySelector(".ac-container");h.innerHTML=x(L);new v(h,{triggerClass:"arrow-btn",duration:400,openOnInit:[0]});function x(e){return e.map(s=>`
      <li class="asked-question-item ac">
        <div class="question-header-container ac-header">
          <h3 class="question">
            ${s.question}
          </h3>
          <div class="arrow-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9L12 15L6 9" stroke="#292929" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <p class="question-answer-p ac-panel">
          ${s.answer}
        </p>
      </li>
      `).join("")}const q=document.querySelector(".modal-form-close"),E=document.querySelector(".modal-container"),P=document.querySelector(".modal-list");q.addEventListener("click",u);P.addEventListener("click",B);function B(e){e.target.nodeName==="A"&&u()}function u(){E.classList.remove("is-open"),document.removeEventListener("keydown",M)}function M(e){e.code==="Escape"&&u()}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(r){r.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const p=[{imageBase:"myprojects1",technologies:"React, JavaScript, Node JS, Git",title:"Power pulse webservice "},{imageBase:"myprojects2",technologies:"React, JavaScript, Node JS, Git",title:"Mimino website"},{imageBase:"myprojects3",technologies:"React, JavaScript, Node JS, Git",title:"Vyshyvanka vibes Landing Page"},{imageBase:"myprojects4",technologies:"React, JavaScript, Node JS, Git",title:"Green harvest online store"},{imageBase:"myprojects5",technologies:"React, JavaScript, Node JS, Git",title:"Wallet webservice"},{imageBase:"myprojects6",technologies:"React, JavaScript, Node JS, Git",title:"Chego jewelry website"},{imageBase:"myprojects7",technologies:"React, JavaScript, Node JS, Git",title:"Energy flow webservice "},{imageBase:"myprojects8",technologies:"React, JavaScript, Node JS, Git",title:"Fruitbox online store"},{imageBase:"myprojects9",technologies:"React, JavaScript, Node JS, Git",title:"English excellence webservice"},{imageBase:"myprojects10",technologies:"React, JavaScript, Node JS, Git",title:"Starlight studio landing page"}],J=document.querySelector(".my-projects-list"),f=document.querySelector(".more-btn");let n=0;const N=3,$=e=>`
    <li class="projects-item">
      <picture>
        <source srcset="./img/my-projects_img/desk-${e.imageBase}-1x.jpg 1x, ./img/my-projects_img/desk-${e.imageBase}-2x.jpg 2x" media="(min-width: 1280px)">
          <source srcset="./img/my-projects_img/desk-${e.imageBase}-1x.jpg 1x, ./img/my-projects_img/desk-${e.imageBase}-2x.jpg 2x" media="(min-width: 768px)">
            <source srcset="./img/my-projects_img/desk-${e.imageBase}-1x.jpg 1x, ./img/my-projects_img/desk-${e.imageBase}-2x.jpg 2x" media="(max-width: 767px)">
        <img class="project-img" src="./img/my-projects_img/desk-${e.imageBase}-1x.jpg" alt="${e.title}">
      </picture>
      <p class="technologies">${e.technologies}</p>
      <div class="title-btn-wrapper">
        <p class="my-project-title"> ${e.title} </p>
      <button class="visit-btn" type="button" onclick="window.open('https://github.com/illusion4044/MastersCode', '_blank');">
          Visit
          <svg class="visit-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" stroke="#00b068" d="M6.333 25.667l19.333-19.333M25.667 6.333h-18M25.667 6.333v18"></path>
          </svg>
        </button>
      </div>
    </li>`,y=()=>{const e=n+N,s=p.slice(n,e).map($).join("");J.insertAdjacentHTML("beforeend",s),n=e,n>=p.length&&f.classList.add("btn-is-hidden")};f.addEventListener("click",y);y();const T=document.querySelector(".swiper-button-next"),G=document.querySelector(".swiper-button-prev");async function I(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){return alert("Fetch error: "+e.message),console.error("Fetch error:",e),null}}function C(){new b(".swiper-container",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:T,prevEl:G},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,slideWidth:704},1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32,slideWidth:592}},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}})}function R(e){return`<li class="swiper-slide review">
    <p class="review-text">${e.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${e.avatar_url}" alt="Avatar">
      <h3 class="name">${e.author}</h3>
    </div>
  </li>`}async function _(e,r){const s=document.querySelector("#reviews-list");if(!s){console.error("Element #reviews-list not found");return}const i=await I();if(!i){s.innerHTML="Not found";return}const t=i.map(o=>r(o)).join("");s.innerHTML=t,e()}_(C,R);const A=document.querySelector(".modal-close"),w=document.querySelector(".popup-container");A.addEventListener("click",m);w.addEventListener("click",V);function V(e){e.currentTarget===e.target&&m()}function m(){w.classList.remove("is-open"),document.removeEventListener("keydown",W)}function W(e){e.code==="Escape"&&m()}
//# sourceMappingURL=commonHelpers.js.map

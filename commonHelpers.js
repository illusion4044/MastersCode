import{A as C,S as J}from"./assets/vendor-2e4332b5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const N=document.querySelector(".modal-form-close"),b=document.querySelector(".modal-container"),$=document.querySelector(".modal-list");N.addEventListener("click",h);$.addEventListener("click",T);function T(e){e.target.nodeName==="A"&&h()}function h(){b.classList.remove("is-open"),document.removeEventListener("keydown",k)}const I=()=>{b.classList.add("is-open"),document.addEventListener("keydown",k)};function k(e){e.code==="Escape"&&h()}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(o){o.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const p=document.querySelector("#checkbox"),A=localStorage.getItem("theme")||"light",d=document.querySelector(".hero-social-list"),i=document.querySelector(".open-menu-icon");A==="dark"?(document.body.classList.add("dark-mode"),d.style.backgroundColor="#2a2d32",i.style.fill="#f0f0f0",p.checked=!0):(document.body.classList.add("light-mode"),d.style.backgroundColor="#e4e5e6",i.style.fill="#292929");p.addEventListener("change",()=>{p.checked?(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode"),d.style.backgroundColor="#2a2d32",i.style.fill="#f0f0f0",localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode"),d.style.backgroundColor="#e4e5e6",i.style.fill="#292929",localStorage.setItem("theme","light"))});i.addEventListener("click",I);const G=document.querySelector(".hero-btn-square"),S=document.querySelector(".hero-btn"),R=document.querySelector(".hero-btn-icon");G.addEventListener("click",()=>{window.location.href=S.href});R.addEventListener("click",()=>{window.location.href=S.href});const O=[{question:"What programming languages ​​are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:" What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],L=document.querySelector(".ac-container");L.innerHTML=V(O);new C(L,{triggerClass:"arrow-btn",duration:400,openOnInit:[0]});function V(e){return e.map(n=>`
      <li class="asked-question-item ac">
        <div class="question-header-container ac-header">
          <h3 class="question">
            ${n.question}
          </h3>
          <div class="arrow-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9L12 15L6 9" stroke="#292929" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <p class="question-answer-p ac-panel">
          ${n.answer}
        </p>
      </li>
      `).join("")}const W="/MastersCode/assets/desk-myprojects1-1x-663c07c0.jpg",D="/MastersCode/assets/desk-myprojects2-1x-5f09a6ea.jpg",F="/MastersCode/assets/desk-myprojects3-1x-1e18271a.jpg",H="/MastersCode/assets/desk-myprojects4-1x-6a4dd2af.jpg",z="/MastersCode/assets/desk-myprojects5-1x-2a8596d2.jpg",_="/MastersCode/assets/desk-myprojects6-1x-470b0415.jpg",Z="/MastersCode/assets/desk-myprojects7-1x-88fcf429.jpg",K="/MastersCode/assets/desk-myprojects8-1x-4ac3b41e.jpg",Q="/MastersCode/assets/desk-myprojects9-1x-fe9f1586.jpg",U="/MastersCode/assets/desk-myprojects10-1x-ad1bd2ef.jpg",X="/MastersCode/assets/icon241-1341c08b.svg",v=[{imageBase:W,technologies:"React, JavaScript, Node JS, Git",title:"Power pulse webservice "},{imageBase:D,technologies:"React, JavaScript, Node JS, Git",title:"Mimino website"},{imageBase:F,technologies:"React, JavaScript, Node JS, Git",title:"Vyshyvanka vibes Landing Page"},{imageBase:H,technologies:"React, JavaScript, Node JS, Git",title:"Green harvest online store"},{imageBase:z,technologies:"React, JavaScript, Node JS, Git",title:"Wallet webservice"},{imageBase:_,technologies:"React, JavaScript, Node JS, Git",title:"Chego jewelry website"},{imageBase:Z,technologies:"React, JavaScript, Node JS, Git",title:"Energy flow webservice "},{imageBase:K,technologies:"React, JavaScript, Node JS, Git",title:"Fruitbox online store"},{imageBase:Q,technologies:"React, JavaScript, Node JS, Git",title:"English excellence webservice"},{imageBase:U,technologies:"React, JavaScript, Node JS, Git",title:"Starlight studio landing page"}],Y=document.querySelector(".my-projects-list"),x=document.querySelector(".more-btn");let l=0;const ee=3,te=e=>`
<li class="projects-item">
      <picture>
        <source srcset="${e.imageBase} 1x, ${e.imageBase.replace("-1x","-2x")} 2x" media="(min-width: 1280px)">
        <source srcset="${e.imageBase} 1x, ${e.imageBase.replace("-1x","-2x")} 2x" media="(min-width: 768px)">
        <source srcset="${e.imageBase} 1x, ${e.imageBase.replace("-1x","-2x")} 2x" media="(max-width: 767px)">
        <img class="project-img" src="${e.imageBase}" alt="${e.title}">
      </picture>
      <p class="technologies">${e.technologies}</p>
      <div class="title-btn-wrapper">
        <p class="my-project-title">${e.title}</p>
        <button class="visit-btn" type="button" onclick="window.open('https://github.com/illusion4044/MastersCode', '_blank');">
          Visit
          <svg class="visit-icon" width="24px" height="24px">
             <use href=${X}></use>
          </svg>
        </button>
      </div>
    </li>`,j=()=>{const e=l+ee,n=v.slice(l,e).map(te).join("");Y.insertAdjacentHTML("beforeend",n),l=e,l>=v.length&&x.classList.add("btn-is-hidden")};x.addEventListener("click",j);j();document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".swiper-button-next"),o=document.querySelector(".swiper-button-prev");if(!e||!o){console.error("Navigation buttons not found");return}async function n(){try{const s=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return await s.json()}catch(s){return alert("Fetch error: "+s.message),console.error("Fetch error:",s),null}}function c(){new J(".swiper-container",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:e,prevEl:o},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,slideWidth:704},1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32,slideWidth:592}},on:{reachEnd:function(){e.classList.add("disabled")},reachBeginning:function(){o.classList.add("disabled")},fromEdge:function(){e.classList.remove("disabled"),o.classList.remove("disabled")}}})}function t(s){return`<li class="swiper-slide review">
      <p class="review-text">${s.review}</p>
      <div class="swiper-img-container">
        <img class="reviews-img" src="${s.avatar_url}" alt="Avatar">
        <h3 class="name">${s.author}</h3>
      </div>
    </li>`}async function r(s,q){const m=document.querySelector("#reviews-list");if(!m){console.error("Element #reviews-list not found");return}const y=await n();if(!y){m.innerHTML="Not found";return}const P=y.map(B=>q(B)).join("");m.innerHTML=P,s()}await r(c,t)});const se=document.querySelector(".modal-close"),g=document.querySelector(".popup-container");se.addEventListener("click",f);g.addEventListener("click",oe);function oe(e){e.currentTarget===e.target&&f()}function f(){g.classList.remove("is-open"),document.removeEventListener("keydown",E)}const ne=()=>{g.classList.add("is-open"),document.addEventListener("keydown",E)};function E(e){e.code==="Escape"&&f()}const w=document.querySelector(".contacts-form"),a=document.querySelector(".contacts-input"),re=document.getElementById("contacts-message"),M=document.querySelector(".contacts-error-message"),u=document.querySelector(".contacts-checkbox-icon");w.addEventListener("submit",e=>{if(e.preventDefault(),!a.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))a.style.color="#E74A3B",M.style.display="inline",u.style.display="none";else{const o={email:a.value,message:re.value};fetch("https://formspree.io/f/mvoejbkp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(n=>{n.ok?(ne(),w.reset(),u.style.display="none"):console.error("Error submitting form:",n.statusText)}).catch(n=>{console.error("Network error:",n)})}});a.addEventListener("input",()=>{a.style.color="#292929",M.style.display="none",a.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?u.style.display="block":u.style.display="none"});
//# sourceMappingURL=commonHelpers.js.map

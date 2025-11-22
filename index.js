import{a as d,S as p,i}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="53361153-f145cef477c4ac6c9fc0f0a0c",g="https://pixabay.com/api/";async function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(g,{params:o})).data.hits}const c=document.querySelector(".gallery"),l=document.querySelector(".loader-backdrop");let h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:a,largeImageURL:t,tags:e,likes:r,views:n,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
          />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",P);async function P(s){s.preventDefault();const a=s.currentTarget.elements["search-text"].value.trim();if(!a){i.warning({message:"Please enter a search query",position:"topRight"});return}L(),w();try{const t=await y(a);if(!t||t.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t)}catch(t){console.error(t),i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}}
//# sourceMappingURL=index.js.map

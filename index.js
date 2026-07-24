import{a as m,S as p,i}from"./assets/vendor-CFFvTae-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d="56827809-548e8e575633a6bef97a51a72";function g(s){return m.get("https://pixabay.com/api/",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:o,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
            loading="lazy"
          />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b><span>${r}</span></p>
          <p class="info-item"><b>Views</b><span>${o}</span></p>
          <p class="info-item"><b>Comments</b><span>${u}</span></p>
          <p class="info-item"><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");c.innerHTML=t,h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){i.error({message:"Please enter a search query!"}),s.currentTarget.reset();return}b(),L(),g(t).then(a=>{if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(a.hits)}).catch(a=>{console.log(a),i.error({message:"Something went wrong!"})}).finally(()=>{S(),s.currentTarget.reset()})}
//# sourceMappingURL=index.js.map

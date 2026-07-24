import{a as p,S as m,i}from"./assets/vendor-CFFvTae-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="56827809-548e8e575633a6bef97a51a72";function g(o){return p.get("https://pixabay.com/api/",{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${e}"
            loading="lazy"
          />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b><span>${t}</span></p>
          <p class="info-item"><b>Views</b><span>${a}</span></p>
          <p class="info-item"><b>Comments</b><span>${u}</span></p>
          <p class="info-item"><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");c.innerHTML=r,h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();b(),L(),r&&(g(r).then(s=>{if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(s.hits)}).catch(s=>{console.log(s),i.error({message:"Something went wrong!"})}).finally(()=>{S()}),o.currentTarget.reset())}
//# sourceMappingURL=index.js.map

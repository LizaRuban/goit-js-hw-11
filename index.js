import{a as p,S as d,i}from"./assets/vendor-CFFvTae-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="56827809-548e8e575633a6bef97a51a72";function y(o){return p.get("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:s,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${e}"
            loading="lazy"
          />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b><span>${r}</span></p>
          <p class="info-item"><b>Views</b><span>${s}</span></p>
          <p class="info-item"><b>Comments</b><span>${u}</span></p>
          <p class="info-item"><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");c.innerHTML=t,g.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(o){if(o.preventDefault(),!query){i.error({message:"Please enter a search query!"}),o.currentTarget.reset();return}b(),L(),y(query).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits)}).catch(t=>{console.log(t),i.error({message:"Something went wrong!"})}).finally(()=>{q()}),o.currentTarget.reset()}
//# sourceMappingURL=index.js.map

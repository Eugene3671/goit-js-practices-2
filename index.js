import{a as H}from"./assets/vendor-BkCUij8E.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();async function l(e,r,s,o){const t="https://api.themoviedb.org/3",i=r,a={page:e,api_key:"d3a8d2b8dd7d39a12f23ee17ed71c787"};s&&(a.query=s,a.year=o);const c=t+i;return(await H.get(c,{params:a})).data}function y(e=[],r=[]){return e.map(({original_title:o,poster_path:t,release_date:i,overview:a,vote_average:c,vote_count:p,id:m})=>{const v=r.some(h=>h.id===m);return`<li class="movie-card">
            <img 
    src="https://image.tmdb.org/t/p/w300/${t}" 
    alt="War of the Worlds Poster" 
    class="movie-poster"
  />
  <div class="movie-info">
    <h2 class="movie-title">${o} <span class="movie-year">${i}</span></h2>
    <div class="movie-stats">
      <span class="movie-rating">⭐ ${c}</span>
      <span class="movie-popularity">🔥 ${p}</span>
      </div>
            <button class="btn-see-more-mov" data-id="${m}" >See more</button>
      <button class="btn-favor-mov" data-id="${m}" data-action="${v?"delete":"add"}" >${v?"Delete from Favorite":"Add to Favorite"}</button>
          </li>`}).join(`
`)}function j({poster_path:e,title:r,genres:s,vote_average:o,vote_count:t,overview:i,release_date:a,production_countries:c},p,{cast:m}){const v=s.map(u=>u.name).join(", "),h=`⭐ ${o==null?void 0:o.toFixed(1)}<br>Votes: 🔥 ${t}`,N=a.slice(0,4),T=c.map(u=>u.name).join(", "),x=p.results[0].key,D=m.slice(0,8).map(({profile_path:u,name:E,character:B})=>`<li class="actor-card">
          <img src="https://image.tmdb.org/t/p/w200${u}" alt="${E}" class="actor-img" />
          <p class="actor-name">${E}</p>
          <p class="actor-role">as ${B}</p>
        </li>`).join(`
`);return`<div class="modal-poster">
            <img id="modal-poster" src="https://image.tmdb.org/t/p/w300/${e}" alt="Poster" />
          </div>
          <div class="modal-info">
            <h2 id="modal-title">Name: ${r}</h2>
            <p id="modal-genres">Country: ${T}</p>
            <p id="modal-genres">Genres: ${v}</p>
            <p id="modal-rating">Rating: ${h}</p>
            <p id="modal-year">Year: ${N}</p>
            <p id="modal-overview">Description:<br>${i}</p>
          </div>
          <div id="modal-trailer" class="trailer">
            <iframe  src="https://www.youtube.com/embed/${x}" title="Movie trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
            </div>
            <h3>Actors</h3>
            <ul id="modal-actors" class="actors-list">${D}</ul>
            <button id="modal-fav-btn" class="fav-btn">Add to Favorites</button>
          `}function V(e){e.classList.remove("hidden")}function J(e){e.classList.add("hidden")}function Y(e){e.classList.remove("hidden"),document.body.classList.add("modal-open")}function K(e){e.classList.add("hidden");const r=document.querySelector("#modal-trailer");r.innerHTML="",document.body.classList.remove("modal-open")}const g=document.querySelector(".movies-list"),M=document.querySelector("#load-more"),k=document.querySelector(".favorites-list"),R=document.querySelector(".found-movie"),A=document.querySelector(".movies-popular-title"),W=document.querySelector(".btn-popular-movie"),G=document.querySelector(".btn-favorites-movie"),C=document.querySelector(".modal"),Q=document.querySelector(".modal-close"),U=document.querySelector(".modal-body");let d,$,b=[],S="popular",O="",P="";const q=localStorage.getItem("favoriet Movie");let n=q?JSON.parse(q):[];f();document.addEventListener("DOMContentLoaded",async()=>{I()});W.addEventListener("click",async()=>{I()});async function I(){S="popular",d=1,A.textContent="Popular Movies";try{const e=await l(d,"/movie/popular"),r=y(e.results,n);g.innerHTML=r,$=e.total_pages,b.push(...e.results)}catch{console.log("Error")}finally{w()}}M.addEventListener("click",async()=>{S==="popular"?F("/movie/popular"):F("/search/movie",O,P)});function w(){d<$?V(M):J(M)}async function F(e,r,s){d+=1;try{const o=await l(d,e,r,s),t=y(o.results,n);g.insertAdjacentHTML("beforeend",t),b.push(...o.results)}catch{console.log("Error")}w()}R.addEventListener("submit",async e=>{e.preventDefault(),d=1,A.textContent="Found movies";const r=e.target.elements.movieName.value.trim(),s=e.target.elements.movieYear.value.trim();if(r!==""){try{const o=await l(1,"/search/movie",r,s),t=y(o.results,n);b=o.results,$=o.total_pages,g.innerHTML=t}catch{console.log("Error")}S="search",O=r,P=s,w(),e.target.reset()}});g.addEventListener("click",async e=>{const r=e.target.closest(".btn-favor-mov"),s=e.target.closest(".btn-see-more-mov");if(r){const o=+r.dataset.id,t=r.dataset.action;if(t==="add"){const i=b.find(c=>c.id==o);if(n.some(c=>c.id==o))return;n.push(i),L("delete",o),f(),localStorage.setItem("favoriet Movie",JSON.stringify(n))}else t==="delete"&&(n=n.filter(i=>i.id!==o),L("add",o),f(),localStorage.setItem("favoriet Movie",JSON.stringify(n)));return}if(s){const o=+s.dataset.id,t=await l(1,`/movie/${o}`),i=await l(1,`/movie/${o}/videos`),a=await l(1,`/movie/${o}/credits`);console.log(a);const c=j(t,i,a);U.innerHTML=c,Y(C);return}});Q.addEventListener("click",()=>{K(C)});k.addEventListener("click",e=>{const r=e.target.closest("button");if(!r)return;const s=+r.dataset.id;n=n.filter(o=>o.id!==s),localStorage.setItem("favoriet Movie",JSON.stringify(n)),f(),L("add",s)});G.addEventListener("click",()=>{document.getElementById("favorites-section").scrollIntoView({behavior:"smooth"})});function L(e,r){const s=document.querySelector(`.movies-list .btn-favor-mov[data-id="${r}"]`);s&&(e==="add"?(s.dataset.action="add",s.textContent="Add to Favorite"):(s.dataset.action="delete",s.textContent="Delete from Favorite"))}function f(){const e=y(n,n);k.innerHTML=e}
//# sourceMappingURL=index.js.map

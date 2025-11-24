import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as j}from"./assets/vendor-BkCUij8E.js";async function l(e,o,a,t){const s="https://api.themoviedb.org/3",i=o,c={page:e,api_key:"d3a8d2b8dd7d39a12f23ee17ed71c787"};a&&(c.query=a,c.year=t);const n=s+i;return(await j.get(n,{params:c})).data}function y(e=[],o=[]){return e.map(({original_title:t,poster_path:s,release_date:i,overview:c,vote_average:n,vote_count:v,id:m})=>{const p=o.some(M=>M.id===m);return`<li class="movie-card">
            <img 
    src="https://image.tmdb.org/t/p/w300/${s}" 
    alt="War of the Worlds Poster" 
    class="movie-poster"
  />
  <div class="movie-info">
    <h2 class="movie-title">${t} <span class="movie-year">${i}</span></h2>
    <div class="movie-stats">
      <span class="movie-rating">⭐ ${n}</span>
      <span class="movie-popularity">🔥 ${v}</span>
      </div>
            <button class="btn-see-more-mov" data-id="${m}" >See more</button>
      <button class="btn-favor-mov" data-id="${m}" data-action="${p?"delete":"add"}" >${p?"Delete from Favorite":"Add to Favorite"}</button>
          </li>`}).join(`
`)}function O({poster_path:e,title:o,genres:a,vote_average:t,vote_count:s,overview:i,release_date:c,production_countries:n},v,{cast:m}){const p=a.map(u=>u.name).join(", "),M=`⭐ ${t==null?void 0:t.toFixed(1)}<br>Votes: 🔥 ${s}`,D=c.slice(0,4),N=n.map(u=>u.name).join(", "),P=v.results[0].key,B=m.slice(0,8).map(({profile_path:u,name:E,character:H})=>`<li class="actor-card">
          <img src="https://image.tmdb.org/t/p/w200${u}" alt="${E}" class="actor-img" />
          <p class="actor-name">${E}</p>
          <p class="actor-role">as ${H}</p>
        </li>`).join(`
`);return`<div class="modal-poster">
            <img id="modal-poster" src="https://image.tmdb.org/t/p/w300/${e}" alt="Poster" />
          </div>
          <div class="modal-info">
            <h2 id="modal-title">Name: ${o}</h2>
            <p id="modal-genres">Country: ${N}</p>
            <p id="modal-genres">Genres: ${p}</p>
            <p id="modal-rating">Rating: ${M}</p>
            <p id="modal-year">Year: ${D}</p>
            <p id="modal-overview">Description:<br>${i}</p>
          </div>
          <div id="modal-trailer" class="trailer">
            <iframe  src="https://www.youtube.com/embed/${P}" title="Movie trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
            </div>
            <h3>Actors</h3>
            <ul id="modal-actors" class="actors-list">${B}</ul>
            <button id="modal-fav-btn" class="fav-btn">Add to Favorites</button>
          `}function V(e){e.classList.remove("hidden")}function J(e){e.classList.add("hidden")}function Y(e){e.classList.remove("hidden"),document.body.classList.add("modal-open")}function R(e){e.classList.add("hidden");const o=document.querySelector("#modal-trailer");o.innerHTML="",document.body.classList.remove("modal-open")}const g=document.querySelector(".movies-list"),h=document.querySelector("#load-more"),F=document.querySelector(".favorites-list"),W=document.querySelector(".found-movie"),C=document.querySelector(".movies-popular-title"),G=document.querySelector(".btn-popular-movie"),K=document.querySelector(".btn-favorites-movie"),A=document.querySelector(".modal"),Q=document.querySelector(".modal-close"),U=document.querySelector(".modal-body");let d,$,b=[],S="popular",T="",I="";const k=localStorage.getItem("favoriet Movie");let r=k?JSON.parse(k):[];f();document.addEventListener("DOMContentLoaded",async()=>{x()});G.addEventListener("click",async()=>{x()});async function x(){S="popular",d=1,C.textContent="Popular Movies";try{const e=await l(d,"/movie/popular"),o=y(e.results,r);g.innerHTML=o,$=e.total_pages,b.push(...e.results)}catch{console.log("Error")}finally{w()}}h.addEventListener("click",async()=>{S==="popular"?q("/movie/popular"):q("/search/movie",T,I)});function w(){d<$?V(h):J(h)}async function q(e,o,a){d+=1;try{const t=await l(d,e,o,a),s=y(t.results,r);g.insertAdjacentHTML("beforeend",s),b.push(...t.results)}catch{console.log("Error")}w()}W.addEventListener("submit",async e=>{e.preventDefault(),d=1,C.textContent="Found movies";const o=e.target.elements.movieName.value.trim(),a=e.target.elements.movieYear.value.trim();if(o!==""){try{const t=await l(1,"/search/movie",o,a),s=y(t.results,r);b=t.results,$=t.total_pages,g.innerHTML=s}catch{console.log("Error")}S="search",T=o,I=a,w(),e.target.reset()}});g.addEventListener("click",async e=>{const o=e.target.closest(".btn-favor-mov"),a=e.target.closest(".btn-see-more-mov");if(o){const t=+o.dataset.id,s=o.dataset.action;if(s==="add"){const i=b.find(n=>n.id==t);if(r.some(n=>n.id==t))return;r.push(i),L("delete",t),f(),localStorage.setItem("favoriet Movie",JSON.stringify(r))}else s==="delete"&&(r=r.filter(i=>i.id!==t),L("add",t),f(),localStorage.setItem("favoriet Movie",JSON.stringify(r)));return}if(a){const t=+a.dataset.id,s=await l(1,`/movie/${t}`),i=await l(1,`/movie/${t}/videos`),c=await l(1,`/movie/${t}/credits`);console.log(c);const n=O(s,i,c);U.innerHTML=n,Y(A);return}});Q.addEventListener("click",()=>{R(A)});F.addEventListener("click",e=>{const o=e.target.closest("button");if(!o)return;const a=+o.dataset.id;r=r.filter(t=>t.id!==a),localStorage.setItem("favoriet Movie",JSON.stringify(r)),f(),L("add",a)});K.addEventListener("click",()=>{document.getElementById("favorites-section").scrollIntoView({behavior:"smooth"})});function L(e,o){const a=document.querySelector(`.movies-list .btn-favor-mov[data-id="${o}"]`);a&&(e==="add"?(a.dataset.action="add",a.textContent="Add to Favorite"):(a.dataset.action="delete",a.textContent="Delete from Favorite"))}function f(){const e=y(r,r);F.innerHTML=e}
//# sourceMappingURL=1-gallery.js.map

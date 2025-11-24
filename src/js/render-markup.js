export function renderMovieCard(data = [], favMovie=[] ) {
  const markup = data.map(({ original_title, poster_path, release_date, overview, vote_average, vote_count, id }) => {
      const isFavorite = favMovie.some(fav => fav.id === id);
    return `<li class="movie-card">
            <img 
    src="https://image.tmdb.org/t/p/w300/${poster_path}" 
    alt="War of the Worlds Poster" 
    class="movie-poster"
  />
  <div class="movie-info">
    <h2 class="movie-title">${original_title} <span class="movie-year">${release_date}</span></h2>
    <div class="movie-stats">
      <span class="movie-rating">⭐ ${vote_average}</span>
      <span class="movie-popularity">🔥 ${vote_count}</span>
      </div>
            <button class="btn-see-more-mov" data-id="${id}" >See more</button>
      <button class="btn-favor-mov" data-id="${id}" data-action="${isFavorite ? 'delete' : 'add'}" >${isFavorite ? 'Delete from Favorite' : 'Add to Favorite' }</button>
          </li>`
    
  }).join('\n');
    return markup;
}

export function renderModalForMovie({ poster_path,title, genres, vote_average, vote_count, overview,release_date,production_countries }, trailer, {cast}) {
  const genresList = genres.map(el => el.name).join(', ');
  const rating = `⭐ ${vote_average?.toFixed(1)}<br>Votes: 🔥 ${vote_count}`;
  const year = release_date.slice(0, 4);
  const country = production_countries.map(el => el.name).join(', ');
  const trailerKey = trailer.results[0].key;
  const actorMarkup = cast.slice(0,8).map(({ profile_path, name, character }) => `<li class="actor-card">
          <img src="https://image.tmdb.org/t/p/w200${profile_path}" alt="${name}" class="actor-img" />
          <p class="actor-name">${name}</p>
          <p class="actor-role">as ${character}</p>
        </li>`).join('\n');
  
  return `<div class="modal-poster">
            <img id="modal-poster" src="https://image.tmdb.org/t/p/w300/${poster_path}" alt="Poster" />
          </div>
          <div class="modal-info">
            <h2 id="modal-title">Name: ${title}</h2>
            <p id="modal-genres">Country: ${country}</p>
            <p id="modal-genres">Genres: ${genresList}</p>
            <p id="modal-rating">Rating: ${rating}</p>
            <p id="modal-year">Year: ${year}</p>
            <p id="modal-overview">Description:<br>${overview}</p>
          </div>
          <div id="modal-trailer" class="trailer">
            <iframe  src="https://www.youtube.com/embed/${trailerKey}" title="Movie trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
            </div>
            <h3>Actors</h3>
            <ul id="modal-actors" class="actors-list">${actorMarkup}</ul>
            <button id="modal-fav-btn" class="fav-btn">Add to Favorites</button>
          `
}

export function showBtnLoadMore(loadMoreEl) {
  loadMoreEl.classList.remove('hidden')
}
export function hideBtnLoadMore(loadMoreEl) {
  loadMoreEl.classList.add('hidden')
}
export function openModalDescription(el) {
  el.classList.remove('hidden');
  document.body.classList.add('modal-open');

}
export function closeModalDescription(el) {
  el.classList.add('hidden');
  const trailerContainer = document.querySelector('#modal-trailer');
  trailerContainer.innerHTML = '';
  document.body.classList.remove('modal-open');

}
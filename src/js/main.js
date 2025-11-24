import { fetchToApiMovie } from './api-fetch';
import {
  closeModalDescription,
  hideBtnLoadMore,
  openModalDescription,
  renderModalForMovie,
  renderMovieCard,
  showBtnLoadMore,
} from './render-markup';

const moviesList = document.querySelector('.movies-list');
const loadMoreEl = document.querySelector('#load-more');
const favoritesListEl = document.querySelector('.favorites-list');
const foundmovieEl = document.querySelector('.found-movie');
const moviesTitle = document.querySelector('.movies-popular-title');
const btnPopularMovie = document.querySelector('.btn-popular-movie');
const favoriteTitleBtn = document.querySelector('.btn-favorites-movie');
const modalEl = document.querySelector('.modal');
const modalCloseEl = document.querySelector('.modal-close');
const modalBodyEl = document.querySelector('.modal-body');

let page;
let maxPage;
let movieArray = [];
let currentMode = 'popular';
let currentQueryName = '';
let currentYear = '';

const getLocalFavMovie = localStorage.getItem('favoriet Movie');
let favMovie = getLocalFavMovie ? JSON.parse(getLocalFavMovie) : [];

renderFavMovieCard();

// Click to fetch the popular movie
document.addEventListener('DOMContentLoaded', async () => {
  loadPopularMovies();
});
btnPopularMovie.addEventListener('click', async () => {
  loadPopularMovies();
});
async function loadPopularMovies() {
  currentMode = 'popular';
  page = 1;
  moviesTitle.textContent = 'Popular Movies';
  try {
    const res = await fetchToApiMovie(page, '/movie/popular');
    const markup = renderMovieCard(res.results, favMovie);
    moviesList.innerHTML = markup;
    maxPage = res.total_pages;
    movieArray.push(...res.results);
  } catch {
    console.log('Error');
  } finally {
    checkLoadMoreViseble();
  }
}

// Click to Btn Load more popular movie
loadMoreEl.addEventListener('click', async () => {
  if (currentMode === 'popular') {
    loadMoreMovie('/movie/popular');
  } else {
    loadMoreMovie('/search/movie', currentQueryName, currentYear);
  }
});
function checkLoadMoreViseble() {
  if (page < maxPage) {
    showBtnLoadMore(loadMoreEl);
  } else {
    hideBtnLoadMore(loadMoreEl);
  }
}

async function loadMoreMovie(endPoint, queryName, year) {
  page += 1;
  try {
    const res = await fetchToApiMovie(page, endPoint, queryName, year);
    const markup = renderMovieCard(res.results, favMovie);
    moviesList.insertAdjacentHTML('beforeend', markup);
    movieArray.push(...res.results);
  } catch {
    console.log('Error');
  }
  checkLoadMoreViseble();
}
// Find the movie

foundmovieEl.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;

  moviesTitle.textContent = 'Found movies';
  const inputNameValue = e.target.elements.movieName.value.trim();
  const inputYearValue = e.target.elements.movieYear.value.trim();
  if (inputNameValue === '') return;
  try {
    const res = await fetchToApiMovie(
      1,
      '/search/movie',
      inputNameValue,
      inputYearValue
    );
    const markup = renderMovieCard(res.results, favMovie);
    movieArray = res.results;
    maxPage = res.total_pages;
    moviesList.innerHTML = markup;
  } catch {
    console.log('Error');
  }
  currentMode = 'search';
  currentQueryName = inputNameValue;
  currentYear = inputYearValue;
  checkLoadMoreViseble();
  e.target.reset();
});

// Click Btn to add in Favorite
moviesList.addEventListener('click', async e => {
  const btnAddFav = e.target.closest('.btn-favor-mov');
  const btnSeeMore = e.target.closest('.btn-see-more-mov');
  if (btnAddFav) {
    const movieId = +btnAddFav.dataset.id;
    const action = btnAddFav.dataset.action;
    if (action === 'add') {
      const foundMovie = movieArray.find(movie => movie.id == movieId);
      const isMovieAlreadySelected = favMovie.some(
        movie => movie.id == movieId
      );
      if (isMovieAlreadySelected) return;
      favMovie.push(foundMovie);
      changeBtnTextContent('delete', movieId);
      renderFavMovieCard();
      localStorage.setItem('favoriet Movie', JSON.stringify(favMovie));
    } else if (action === 'delete') {
      favMovie = favMovie.filter(movie => movie.id !== movieId);
      changeBtnTextContent('add', movieId);
      renderFavMovieCard();
      localStorage.setItem('favoriet Movie', JSON.stringify(favMovie));
    }
    return;
  }
  if (btnSeeMore) {
    const movieId = +btnSeeMore.dataset.id;
    const res = await fetchToApiMovie(1, `/movie/${movieId}`);
    const trailerMovie = await fetchToApiMovie(1, `/movie/${movieId}/videos`);
    const actorsMovie = await fetchToApiMovie(1, `/movie/${movieId}/credits`);
    console.log(actorsMovie);
    const markup = renderModalForMovie(res, trailerMovie, actorsMovie);
    modalBodyEl.innerHTML = markup;
    openModalDescription(modalEl);
    return;
  }
});

modalCloseEl.addEventListener('click', () => {
  closeModalDescription(modalEl);
});

favoritesListEl.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const movieId = +btn.dataset.id;
  favMovie = favMovie.filter(movie => movie.id !== movieId);
  localStorage.setItem('favoriet Movie', JSON.stringify(favMovie));
  renderFavMovieCard();
  changeBtnTextContent('add', movieId);
});
favoriteTitleBtn.addEventListener('click', () => {
  const favoritesSection = document.getElementById('favorites-section');
  favoritesSection.scrollIntoView({ behavior: 'smooth' });
});
function changeBtnTextContent(action, movieId) {
  const btn = document.querySelector(
    `.movies-list .btn-favor-mov[data-id="${movieId}"]`
  );
  if (btn) {
    if (action === 'add') {
      btn.dataset.action = 'add';
      btn.textContent = 'Add to Favorite';
    } else {
      btn.dataset.action = 'delete';
      btn.textContent = 'Delete from Favorite';
    }
  }
}
function renderFavMovieCard() {
  const markup = renderMovieCard(favMovie, favMovie);
  favoritesListEl.innerHTML = markup;
}

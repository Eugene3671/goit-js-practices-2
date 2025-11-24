// const products = [
//   {
//     id: "p1",
//     name: "Смартфон Samsung A54",
//     price: 12000,
//     image: "https://images.prom.ua/4724654974_w640_h320_smartfon-samsung-galaxy.jpghttps://images.prom.ua/4724654974_w640_h320_smartfon-samsung-galaxy.jpg",
//     description: "6.4” AMOLED, 128 ГБ пам’яті, 5000 мА·год акумулятор"
//   },
//   {
//     id: "p2",
//     name: "Навушники JBL Tune 510BT",
//     price: 2000,
//     image: "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/88353/c/slider13qwbB-desktop.webp",
//     description: "Bluetooth, до 40 годин автономної роботи, легкий дизайн"
//   },
//   {
//     id: "p3",
//     name: "Ноутбук Lenovo IdeaPad 3",
//     price: 32000,
//     image: "https://i.citrus.world/imgcache/size_800/uploads/shop/b/9/b914ef989012dc3b2d3b467e06acb969.webp",
//     description: "15.6” Full HD, Ryzen 5, 512 ГБ SSD, 8 ГБ RAM"
//   },
//   {
//     id: "p4",
//     name: "Планшет Apple iPad 10.2”",
//     price: 15000,
//     image: "https://apple-mania.com.ua/media/catalog/product/cache/e026f651b05122a6916299262b60c47d/i/p/ipad-2021-hero-silver-wifi-select1.jpg",
//     description: "Retina дисплей, A13 Bionic, підтримка Apple Pencil"
//   }
// ];



// const productListEl = document.querySelector('.product-list');
// const buttonAdd = document.querySelector('.button-add');
// const cartList = document.querySelector('.cart-list');
// const priceOrder = document.querySelector('.price-order');
// const clearCartEl = document.querySelector('.clear-cart');
// const markup = products.map(e => {
//     return `<li class="product-card" >
//             <img src="${e.image}" alt="product" />
//                         <p>${e.name}</p>
//             <p>${e.price}</p>
//             <p>${e.description}</p>
//                         <button data-id="${e.id}">Додати в кошик</button>

//           </li>`
// }).join('\n');
// productListEl.innerHTML = markup;
// let buyProduct = JSON.parse(localStorage.getItem('cart')) || [];

// productListEl.addEventListener('click', handler);
// function handler(e) {
//     if (e.currentTarget === e.target) return;
//     const productId = e.target.dataset.id;
//     const hasProdustAtArray = buyProduct.find((el) => el.id == productId);
//     if (hasProdustAtArray) {
//       hasProdustAtArray.quantity += 1;
//           localStorage.setItem('cart', JSON.stringify(buyProduct));
//       renderCard();
//       return;
//       };
    
//   const orderProduct = products.find(el => el.id == productId);
//     const productWithQuantity = { ...orderProduct, quantity: 1 };
//     buyProduct.push(productWithQuantity);
//   localStorage.setItem('cart', JSON.stringify(buyProduct));

//     renderCard();
// }
// function creatCartmarkup(cart) {
//   return cart.map(e => {
//     return `<li class="product-card" >
//             <img src="${e.image}" alt="product" />
//                         <p>${e.name}</p>
//             <p>${e.price}</p>
//             <p>${e.description}</p>
//             <p>Кількість:${e.quantity}</p> 
//             <button class="button-remove" data-id="${e.id}">-</button>
//                         <button class="clear-product" data-id="${e.id}">Видалити з кошика</button>
//           </li>`
//   }).join('\n');
// }

// function renderCard() {
//   cartList.innerHTML = creatCartmarkup(buyProduct);
//   updateTotalprice()
// }
// function updateTotalprice() {
//   priceOrder.textContent = buyProduct.reduce((total, el) => {
//     return total + el.price * el.quantity;
//   },0)
// }
// cartList.addEventListener('click', (e) => {
//     if (e.currentTarget === e.target) return;
//   const productId = e.target.dataset.id;
//   if (e.target.classList.contains('clear-product')) {
//     buyProduct = buyProduct.filter(e => e.id !== productId);
     
//   }
//   if (e.target.classList.contains('button-remove')) {
//      const item = buyProduct.find(el => el.id == productId);
//   if (item.quantity > 1) {
//   item.quantity -= 1;
//   } else {
//         buyProduct = buyProduct.filter(e => e.id !== productId);
//   }
//    }
//     localStorage.setItem('cart', JSON.stringify(buyProduct));
//     renderCard();
// })
// clearCartEl.addEventListener('click', () => {
//   cartList.innerHTML = '';
//    buyProduct = [];
//   localStorage.removeItem('cart');
//   renderCard();
// })
// renderCard();

// <h1>Галерея товарів</h1>
//         <ul class="product-list">
//           <li class="product-card" data-id="">
//             <img href="" src="" alt="" />
//             <p></p>
//             <p></p>
//           </li>
//         </ul>
//         <h2>Ваш кошик</h2>
//         <ul class="cart-list"></ul>
//         <button class="clear-cart">Очистити кошик</button>
//         <p>Сума замовлення <span class="price-order"></span></p>

// !======================================================================================================================================
// Реалізувати веб-додаток "Менеджер нотаток", де користувач може:

// Додавати нотатки з заголовком, текстом, тегом і кольором.

// Переглядати всі нотатки.

// Шукати нотатки за текстом.

// Фільтрувати нотатки за тегами.

// Видаляти окремі нотатки.

// Дані зберігаються в localStorage і не зникають при перезавантаженні сторінки.

// 📌 Функціональність (списком)
// ➕ Додавання нотатки:
// При сабміті форми створюється нова нотатка.

// Значення полів title, text, tag, color зчитуються з форми.

// Нотатка додається в масив, зберігається в localStorage і рендериться на сторінці.

// 🔍 Пошук:
// У полі .search-input користувач вводить текст.

// Виводяться нотатки, де title або text містять цей текст (без урахування регістру).

// 🏷️ Фільтр по тегу:
// У випадаючому списку .tag-filter доступні всі унікальні теги.

// При виборі відображаються лише нотатки з цим тегом.

// 🗑️ Видалення нотатки:
// Кожна нотатка має кнопку "Видалити".

// Після кліку — нотатка зникає і з масиву, і з localStorage.

// 🧩 Додаткові опції (за бажанням)
// Опція	Опис
// 📝 Редагування нотатки	Можна додати кнопку "Редагувати", яка відкриє модальне вікно з полями.
// 📅 Сортування за датою	Сортувати за датою створення.
// 🎨 Кольори	Кожна нотатка відображається на фоні вибраного кольору.

//<form class="note-form">
  //        <input type="text" name="title" placeholder="Заголовок" required />
    //      <textarea name="text" placeholder="Текст нотатки" required></textarea>
      //    <input
        //    type="text"
          //  name="tag"
           // placeholder="Тег (наприклад: робота, особисте)"
          ///>
          //<input type="color" name="color" value="#ffffff" />
          //<button type="submit">Додати нотатку</button>
       // </form>

        //<input
          //type="text"
          //class="search-input"
          //placeholder="Пошук нотатки..."
       // />
        //<select class="tag-filter">
          //<option value="all">Усі теги</option>
        //</select>

//        <ul class="note-list"></ul>


// const noteListEl = document.querySelector('.note-list');
// let notes = JSON.parse(localStorage.getItem('notes')) || [];
// const noteFormEl = document.querySelector('.note-form');
// noteFormEl.addEventListener('submit', handlerAddNotes);
// const searchInput = document.querySelector('.search-input');
// searchInput.addEventListener('input', handlerFindNotes);
// const tagFilterEl = document.querySelector('.tag-filter');
// tagFilterEl.addEventListener('change', (e) => {
//   const selectedValue = e.target.value;
//   const filterNotes = notes.filter(el => el.tag.toLowerCase().includes(selectedValue));
//   renderListNotes(filterNotes);
// })
// noteListEl.addEventListener('click', (e) => {
//   if (e.target === e.currentTarget) return;
//   const itemofList = e.target.dataset.id;
//   notes = notes.filter(el => el.id !== +itemofList);
//   localStorage.setItem('notes', JSON.stringify(notes));
//   renderListNotes(notes);
//   renderOptions(notes);
// });
// renderListNotes(notes);
// renderOptions(notes);
// function handlerAddNotes(e) {
//   e.preventDefault();
//   const initTime = Date.now();
//   const lolacDate = new Date(initTime);
//   const notesObj = {
//     id: initTime,
//   title: e.currentTarget.elements.title.value.trim(),
//   text: e.currentTarget.elements.text.value.trim(),
//   tag: e.currentTarget.elements.tag.value.trim(),
//   color: e.currentTarget.elements.color.value,
//   createdAt: lolacDate.toLocaleString()
//   }
//   notes.push(notesObj);
//   localStorage.setItem('notes', JSON.stringify(notes));
//   renderListNotes(notes);
//   renderOptions(notes);
//   e.target.reset();
// }
// function createMarkupList(array) {
//   const markup = array.map(el => {
//     return `<li>
//             <div style="background-color: ${el.color}; width: 20px; height: 20px; border-radius: 50%;"></div>
//             <h3>${el.title}</h3>
//             <p>${el.text}</p>
//             <p>${el.tag}</p>
//             <button data-id="${el.id}">Видалити</button>
//             <p>${el.createdAt}</p>
//           </li>`
//   }).join('\n');
//   return markup;
// }
// function renderListNotes(array) {
//   noteListEl.innerHTML = createMarkupList(array);
// }
// function handlerFindNotes() {
//   const query = searchInput.value.toLowerCase();
//   const filterNotes = notes.filter(el =>
//     el.title.toLowerCase().includes(query) || 
//     el.text.toLowerCase().includes(query) 
//   );
//   renderListNotes(filterNotes);
// }
// function createsSelectOtions(array) {
//   const uniqueTags = [...new Set(array.map(el => el.tag.toLowerCase()))];
//   const markup = ['<option value="all">Усі теги</option>', ...uniqueTags.map(tag => {
//     return `<option value="${tag}">${tag}</option>`
//   })].join('\n');
//   return markup;
// }
// function renderOptions(array) {
//   tagFilterEl.innerHTML = createsSelectOtions(array);
// }

// !======================================================================================================================================
// Задача 1. Автоматичний лічильник повідомлень
// Тема: Асинхронність + дата і час
// Ціль: Попрактикувати setInterval, Date.now() та відображення часу в інтерфейсі.

// 🧩 Технічне завдання:
// Кожні 10 секунд на екрані має з’являтися нове повідомлення з часом його появи.

// Повідомлення мають додаватися у список (ul), найновіше — вгорі.

// У повідомленні має відображатися:

// порядковий номер

// дата та час у форматі HH:MM:SS DD/MM/YYYY

// Передбач кнопку «Стоп», яка зупиняє генерацію нових повідомлень.
// const messageListEl = document.querySelector('.message-list');
// const stopBtnEl = document.querySelector('.stop-btn');
// let intervalId = setInterval(() => {
//   const date = new Date(Date.now());
//   const markup = `<li><p>${date}</p></li>`;
//   messageListEl.insertAdjacentHTML('beforeend', markup);
// }, 1000);
// stopBtnEl.addEventListener('click', () => {
//   clearInterval(intervalId);
// })
//  <h2>Сповіщення</h2>
//         <button type="button" class="stop-btn">Стоп</button>
//         <ul class="message-list"></ul>

// !======================================================================================================================================

// <form id="weather-form" class="weather-form">
//           <input type="text" name="lat" placeholder="Enter lat" required />
//           <input type="text" name="lon" placeholder="Enter lon" required />
//           <button class="submitbth" type="submit">Get Weather</button>
//         </form>
//         <div class="weather-result"></div>

// function searchWether(lat, lon) {
//   const BASE_URL = 'https://weatherbit-v1-mashape.p.rapidapi.com';
//   const END_POINT = '/forecast/3hourly';
//   const params = new URLSearchParams({
//     lat: lat,
//     lon: lon
//   });


//   const url = `${BASE_URL}${END_POINT}?${params}`;
//   const options = {
//     headers: {
//       'x-rapidapi-key': '7504889816mshe35e71530e54cddp1b19d4jsn743011bcd636',
//       'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
//     }
//   };
//   return fetch(url, options).then(res => res.json());
// }
// function renderWeatherCard(weatherObj) {
//   const weather = weatherObj.data[0];

//   const html = `
//     <div class="weather-container">
//       <h2>Погода в місті: <span>${weatherObj.city_name}</span></h2>
//       <p><strong>Дата:</strong> <span>${weather.timestamp_utc.replace("T", " ")}</span></p>
//       <p><strong>Стан:</strong> <span>${weather.weather.description}</span></p>
//       <img src="https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png" alt="icon" />
//       <ul>
//         <li><strong>УФ-індекс:</strong> <span>${weather.uv ?? "Н/Д"}</span></li>
//         <li><strong>Видимість:</strong> <span>${weather.vis ?? "Н/Д"} км</span></li>
//         <li><strong>Напрям вітру:</strong> <span>${weather.wind_cdir_full ?? "Н/Д"}</span></li>
//         <li><strong>Опади:</strong> <span>${weather.precip ?? "Н/Д"} мм</span></li>
//       </ul>
//     </div>
//   `;

//   return html;
// }
// const weatherForm = document.querySelector('.weather-form');

// const weatherResult = document.querySelector('.weather-result');
// weatherForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const lat = e.target.elements.lat.value;
//   const lon = e.target.elements.lon.value;
//   console.log(lat, lon);
//   searchWether(lat, lon).then(data => {
//     const markup = renderWeatherCard(data);
//     weatherResult.insertAdjacentHTML('afterbegin', markup);
//   });
//   e.target.reset();
// })


// !======================================================================================================================================
import axios from "axios";
import { fetchToApiMovie } from "./api-fetch";
import { closeModalDescription, hideBtnLoadMore, openModalDescription, renderModalForMovie, renderMovieCard, showBtnLoadMore } from "./render-markup";


// const getBtnEl = document.querySelector('.get-btn');
// const usersListEl = document.querySelector('#users-list');
// function getUsersList() {
//   axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//   return axios.get('/users').then(res => res.data).catch(err => console.log(err));
// }

// function renderUsersList(array) {
//   const markup = array.map(el => `<li data-id="${el.id}">
//             <p>${el.name}</p>
//           </li>`).join('\n');
//   usersListEl.innerHTML = markup;
// }

// function renderUserAddress(el) {
//   return `<div class="user-addres">${el.address.street} ${el.address.city} ${el.address.zipcode}</div>`;
// }

// getBtnEl.addEventListener('click', () => {
//   getUsersList().then(data => {
//     renderUsersList(data);
//     usersListEl.addEventListener('click', (e) => {
//       if (e.target === e.currentTarget) return;
//       const li = e.target.closest('li');
//       const filterArray = data.find(el => el.id == li.dataset.id);
//       const userAddresEl = li.querySelector('.user-addres');
//       if (userAddresEl) {
//         userAddresEl.remove();
//       } else {
//         li.insertAdjacentHTML('beforeend', renderUserAddress(filterArray));
//       }
//     })
//    }
    
//   ).catch(err => console.log(err));

  
// })

// <button class="get-btn" type="button">Get Users</button>
//         <ul id="users-list"></ul>
// !======================================================================================================================================

// const eventListEl = document.getElementById('events-list');
// const loadEventsEl = document.getElementById('load-events');
// const favoritesListEl = document.getElementById('favorites-list');

// function getFutereEvent() {
//   return axios.get('https://date.nager.at/api/v3/PublicHolidays/2025/UA')
//     .then(res => res.data)
//     .catch(err => console.log(err));
// }
// function timer(container, dateStr) {
// let intervalId;
//   const timerEnd = new Date(`${dateStr}T00:00:00`).getTime();
//   intervalId = setInterval(() => {
//     const diffTime = timerEnd - Date.now();
    
//     const { daysStr, hoursStr, minutesStr, secondsStr } = convertMs(diffTime); 
//      container.textContent = `${daysStr}:${hoursStr}:${minutesStr}:${secondsStr}`;
//     let isTimerFinished = daysStr === '00' && hoursStr === '00' && minutesStr === '00' && secondsStr === '00';
//     if (isTimerFinished) {
//       clearInterval(intervalId);
//     }
//   },1000)
// }

// function initTimers(container) {
//   const timerEls = container.querySelectorAll('.timer');
//   timerEls.forEach(timerEl => {
//     const dateStr = timerEl.dataset.date;
//     timer(timerEl, dateStr);
//   });
// }
// function renderEventList(array) {
//   const markup = array.map(el => `<li >
//     <h3>${el.localName}</h3>
//           <p>${el.date}</p>
//           <p class="timer" data-date="${el.date}"></p>
//           <button class="add-to-change" type="button" data-id="${el.date}">Add</button></li>`).join('\n');
//   eventListEl.innerHTML = markup;
// }
// const savedEvents = localStorage.getItem('selected-item');
// let selectedEvents = savedEvents ? JSON.parse(savedEvents) : [];

// function renderSelecctedEvents(array) {
//   const markup = array.map(el=>`<li style="background-color: red;" >
//     <h3>${el.localName}</h3>
//           <p>${el.date}</p>
//           <p class="timer" data-date="${el.date}"></p>
//           <button class="delete-to-change" type="button" data-id="${el.date}">Delete</button></li>`).join('\n');
//   favoritesListEl.innerHTML = markup;
// }



//   renderSelecctedEvents(selectedEvents);
// initTimers(favoritesListEl);
// loadEventsEl.addEventListener('click', () => {
//   getFutereEvent()
//     .then(data => { 
//       renderEventList(data);
//       initTimers(eventListEl);
//       eventListEl.addEventListener('click', (e) => {
//         if (e.target === e.currentTarget) return;
//         const changedId = e.target.dataset.id;
//         const filterObg = data.find(el => el.date === changedId);
//         const isAlreadySeleccted = selectedEvents.some(el => el.date === filterObg.date);
//         if (isAlreadySeleccted) return;
//         selectedEvents.push(filterObg);
//         localStorage.setItem('selected-item', JSON.stringify(selectedEvents));
//         renderSelecctedEvents(selectedEvents);
//         initTimers(favoritesListEl);
//       })
//     })
//     .catch(err => console.log(err));
// })
 
// favoritesListEl.addEventListener('click', (e) => {
//           if (e.target === e.currentTarget) return;
//         const changedId = e.target.dataset.id;
//   selectedEvents = selectedEvents.filter(el => el.date !== changedId);
//    localStorage.setItem('selected-item', JSON.stringify(selectedEvents));
//         renderSelecctedEvents(selectedEvents);
// })



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   const daysStr = String(days).padStart(2, "0");
//   const hoursStr = String(hours).padStart(2, "0");
//   const minutesStr = String(minutes).padStart(2, "0");
//   const secondsStr = String(seconds).padStart(2, "0");
//   return { daysStr, hoursStr, minutesStr, secondsStr };
// }

// !======================================================================================================================================
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
})
btnPopularMovie.addEventListener('click', async () => {
  loadPopularMovies();
})
async function loadPopularMovies() {
  currentMode = 'popular';
  page = 1;
    moviesTitle.textContent = 'Popular Movies';
  try {
  const res = await fetchToApiMovie(page,'/movie/popular');
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
     loadMoreMovie('/search/movie',currentQueryName,currentYear);
  }
  
})
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

foundmovieEl.addEventListener('submit',async (e) => {
  e.preventDefault();
  page = 1;

  moviesTitle.textContent = 'Found movies';
  const inputNameValue = e.target.elements.movieName.value.trim();
  const inputYearValue = e.target.elements.movieYear.value.trim();
  if (inputNameValue === '') return;
  try {
    const res = await fetchToApiMovie(1, '/search/movie', inputNameValue, inputYearValue);
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
})

// Click Btn to add in Favorite
moviesList.addEventListener('click', async (e) => {
  const btnAddFav = e.target.closest('.btn-favor-mov');
  const btnSeeMore = e.target.closest('.btn-see-more-mov');
  if (btnAddFav) {
    const movieId = +btnAddFav.dataset.id;
    const action = btnAddFav.dataset.action;
   if (action === 'add') {
  const foundMovie = movieArray.find(movie => movie.id == movieId);
  const isMovieAlreadySelected = favMovie.some(movie => movie.id == movieId)
  if (isMovieAlreadySelected) return;
     favMovie.push(foundMovie);
     changeBtnTextContent('delete',movieId);
     renderFavMovieCard();
  localStorage.setItem('favoriet Movie', JSON.stringify(favMovie)); 
  } else if(action === 'delete'){
     favMovie = favMovie.filter(movie => movie.id !== movieId);
     changeBtnTextContent('add',movieId);
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
  
})

modalCloseEl.addEventListener('click', () => {
  closeModalDescription(modalEl);
  })

favoritesListEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const movieId = +btn.dataset.id;
  favMovie = favMovie.filter(movie => movie.id !== movieId);
  localStorage.setItem('favoriet Movie', JSON.stringify(favMovie));
  renderFavMovieCard();
  changeBtnTextContent('add', movieId);
})
favoriteTitleBtn.addEventListener('click', () => {
  const favoritesSection = document.getElementById('favorites-section');
  favoritesSection.scrollIntoView({ behavior: 'smooth' });
})
function changeBtnTextContent(action,movieId) {
  const btn = document.querySelector(`.movies-list .btn-favor-mov[data-id="${movieId}"]`);
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

// !======================================================================================================================================
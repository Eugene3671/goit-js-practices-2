// Задача 1 (ускладнена): Автозбереження форми з затримкою + лічильник символів
// Технічне завдання (ТЗ):
// При введенні даних у поля форми (email, message) потрібно:
// зберігати ці дані в localStorage з ключем "feedback-form-state",
// але не одразу, а через 500 мс після останнього введення (використати дебаунс).
// При завантаженні сторінки:
// якщо у localStorage є збережені значення — вставити їх у відповідні поля,
// якщо нема — залишити порожні поля.
// Під полем message відображати лічильник символів, який показує:
// Введено X із 500 символів.
// При відправленні форми:
// якщо хоча б одне поле порожнє — показати повідомлення Fill please all fields;
// якщо все заповнено — вивести formData у консоль, очистити:
// localStorage,
// поля форми,
// formData,
// лічильник символів.
// Максимальна довжина повідомлення — 500 символів.

const feedbackFormEl = document.querySelector('.feedback-form');
const charCounter = document.querySelector('.char-counter');
const formData = {
    email: '',
    message: ''
}
const localStorageValue = localStorage.getItem("feedback-form-state");
if (localStorageValue) {
    const parseFormData = JSON.parse(localStorageValue);
    formData.email = parseFormData.email || '';
    formData.message = parseFormData.message || '';
    feedbackFormEl.elements.email.value = formData.email;
    feedbackFormEl.elements.message.value = formData.message;
               charCounter.textContent = formData.message.length;
}
let timerId;
feedbackFormEl.addEventListener('input', handler);
function handler() {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
         formData.email = feedbackFormEl.elements.email.value.trim();
    formData.message = feedbackFormEl.elements.message.value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
           charCounter.textContent = formData.message.length;
    }, 500)
}
feedbackFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (feedbackFormEl.elements.email.value.trim() === ''
        || feedbackFormEl.elements.message.value.trim() === '') {
        alert('Fill please all fields');
        return;
    } 
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    feedbackFormEl.reset();
    formData.email = '';
    formData.message = '';
               charCounter.textContent = 0;
})
/**
 * Переменная экземпляра Swiper для экспорта в другие модули (например, в sorting.js)
 */
export let swiper = null;

/**
 * Основная функция инициализации слайдера спецпредложений.
 * Она нарезает исходные 14 карточек на страницы-списки и запускает Swiper.
 */
export function initSpecialOffersSlider() {
  const sliderContainer = document.querySelector(
    "[data-special-offers-slider]",
  );
  if (!sliderContainer) return;

  // 1. Ищем исходный список, в котором лежат все карточки
  const mainList = sliderContainer.querySelector("[data-special-offers-page]");
  if (!mainList) return;

  // Собираем все карточки <li> в массив (работает корректно и при повторном вызове после сортировки)
  const cards = Array.from(
    sliderContainer.querySelectorAll(".special-offers__item"),
  );
  const wrapper = sliderContainer.querySelector(".swiper-wrapper");

  if (cards.length === 0 || !wrapper) return;

  // Определяем количество карточек на одной странице: на ПК — 6, на мобильных (<=576px) — 4
  const cardsPerPage = window.innerWidth > 576 ? 6 : 4;

  // Полностью очищаем wrapper перед сборкой страниц
  wrapper.innerHTML = "";

  // 2. Циклом нарезаем массив карточек на группы и создаем слайды-страницы
  for (let i = 0; i < cards.length; i += cardsPerPage) {
    const cardChunk = cards.slice(i, i + cardsPerPage);

    // Создаем swiper-slide (контейнер для одной страницы)
    const slideDiv = document.createElement("div");
    slideDiv.className = "special-offers__slide swiper-slide";
    slideDiv.style.height = "auto"; // Страница подстраивается под высоту сетки

    // Создаем новый UL, который применит ваши адаптивные CSS-grid стили
    const newUl = document.createElement("ul");
    newUl.className = "special-offers__list";
    newUl.setAttribute("data-special-offers-page", "");

    // Переносим карточки из текущей группы внутрь этого UL
    cardChunk.forEach(card => newUl.appendChild(card));

    // Собираем структуру вместе
    slideDiv.appendChild(newUl);
    wrapper.appendChild(slideDiv);
  }

  // 3. Запуск одномерного Swiper
  // Если слайдер уже был инициализирован ранее, уничтожаем старый экземпляр
  if (swiper) {
    swiper.destroy(true, true);
  }

  // Создаем новый экземпляр и записываем в экспортную переменную
  swiper = new Swiper("[data-special-offers-slider]", {
    slidesPerView: 1, // Всегда 1 страница-сетка на экране
    spaceBetween: 30, // Отступ между страницами при свайпе
    grabCursor: true, // Курсор-рука
    watchSlidesProgress: true,

    navigation: {
      nextEl: ".special-offers__slider-button--next", // Класс кнопки "Вперед"
      prevEl: ".special-offers__slider-button--prev", // Класс кнопки "Назад"
    },

    // ПОДКЛЮЧАЕМ СЧЁТЧИК СТРАНИЦ
    pagination: {
      el: ".special-offers__pagination", // Класс твоего дива
      type: "fraction", // Тип: дроби (цифры)
    },
  });
}

// Автоматически запускаем инициализацию (так как скрипт подключен с defer, DOM уже готов)
initSpecialOffersSlider();

// Перестраиваем сетку (по 4 или по 6 карточек) при изменении размеров экрана (с задержкой для оптимизации)
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initSpecialOffersSlider();
  }, 300);
});

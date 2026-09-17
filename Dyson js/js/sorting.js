import { listSelectElement } from "./select-list.js";
// 1. Импортируем функцию перезапуска, чтобы сказать Свайперу: "Эй, я поменял порядок!"
import { initSpecialOffersSlider } from "./swiper.js";

function sortCard(sortType) {
  // Ищем внутри всего слайдера, потому что Swiper раскидал карточки по слайдам
  const sliderContainer = document.querySelector(
    "[data-special-offers-slider]",
  );

  const cardArray = Array.from(
    sliderContainer.querySelectorAll(".special-offers__item"),
  );

  cardArray.sort((cardA, cardB) => {
    let valA, valB;

    if (sortType === "new") {
      valA = Date.parse(cardA.dataset.date);
      valB = Date.parse(cardB.dataset.date);
    } else if (sortType === "cheap" || sortType === "expensive") {
      valA = Number(cardA.querySelector(".product-card__price").value);
      valB = Number(cardB.querySelector(".product-card__price").value);
    } else {
      valA = Number(cardA.dataset[sortType]);
      valB = Number(cardB.dataset[sortType]);
    }

    switch (sortType) {
      case "popular":
      case "expensive":
      case "new":
      case "rating":
        return valB - valA;

      case "cheap":
        return valA - valB;

      default:
        return 0;
    }
  });

  // 2. Находим базовый список, куда нужно вернуть карточки
  const cardListElement = sliderContainer.querySelector(
    ".special-offers__list",
  );

  cardListElement.append(...cardArray);

  // 3. Вместо свайперовского update(), который не понимает сетки,
  // вызываем нашу функцию сборщика. Твой массив она не тронет, просто красиво разложит по 6 штук.
  initSpecialOffersSlider();
}

export function sorting() {
  listSelectElement.addEventListener("click", event => {
    const clikedItem = event.target.closest(".custom-select__item");
    if (!clikedItem) return;
    const selectedType = clikedItem.dataset.sort;
    if (selectedType) sortCard(selectedType);
  });
}

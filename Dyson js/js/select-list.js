export const listSelectElement = document.querySelector(".custom-select__list");

export function selectList() {
  const btnSelectElement = document.querySelector(".special-offers__select");

  const itemsSelectElements = document.querySelectorAll(".custom-select__item");
  const btnTextElement = btnSelectElement.querySelector(
    ".custom-select__btn-text",
  );

  const addCheckmarkHTML = element => {
    element.insertAdjacentHTML(
      "beforeend",
      `
    <svg class="special-offers__select-cheked" width="20" height="20">
      <use href="./icons/main-sprite.svg#check"></use>
    </svg>
  `,
    );
  };

  const removeDataCheck = () => {
    itemsSelectElements.forEach(item => {
      if (item.dataset.selected === "true") {
        item.removeAttribute("data-selected");
      }
    });
  };

  btnSelectElement.addEventListener("click", () => {
    listSelectElement.hidden = !listSelectElement.hidden;
    btnSelectElement.classList.toggle("special-offers__select--active");
    const oldCheckMarcElement = document.querySelector(
      ".special-offers__select-cheked",
    );
    if (oldCheckMarcElement) oldCheckMarcElement.remove();
    itemsSelectElements.forEach(item => {
      if (
        item.dataset.selected === "true" &&
        listSelectElement.hidden === false
      ) {
        addCheckmarkHTML(item);
      }
    });
  });

  listSelectElement.addEventListener("click", ({ target }) => {
    if (target.tagName === "LI") {
      removeDataCheck();
      btnTextElement.textContent = target.textContent;
      target.dataset.selected = "true";
      listSelectElement.hidden = !listSelectElement.hidden;
      btnSelectElement.classList.toggle("special-offers__select--active");
    }
  });

  document.addEventListener("click", event => {
    const selectContainer = event.target.closest(".special-offers__sorting");
    if (!selectContainer) {
      listSelectElement.hidden = true;
      btnSelectElement.classList.remove("special-offers__select--active");
    }
  });
}

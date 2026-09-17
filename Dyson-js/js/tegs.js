export function toggleTags() {
  const showMoreBtnElement = document.querySelector(
    ".special-offers__show-more",
  );
  const hidenTags = document.querySelectorAll("[data-extra-tag]");

  const tags = () => {
    const hidden = "Скрыть";
    const show = "Показать еще";

    const isHidden = hidenTags[0]?.hasAttribute("hidden");

    if (isHidden) {
      hidenTags.forEach(tag => tag.removeAttribute("hidden"));
      showMoreBtnElement.textContent = hidden;
    } else {
      hidenTags.forEach(tag => tag.setAttribute("hidden", ""));
      showMoreBtnElement.textContent = show;
    }
  };

  showMoreBtnElement.addEventListener("click", tags);
}

export function mobileMenu() {
  const burgerBtnElement = document.querySelector(".burger");
  const menuMobileElement = document.querySelector(".header__menu");
  const overlayElement = document.querySelector(".overlay");

  function menuOpenClose() {
    menuMobileElement.classList.toggle("header__menu--open");
    burgerBtnElement.classList.toggle("burger--open");
    overlayElement.classList.toggle("overlay--open");
    document.body.classList.toggle("page__body--no-scroll");
  }

  burgerBtnElement.addEventListener("click", menuOpenClose);

  menuMobileElement.addEventListener("click", ({ target }) => {
    if (
      target.tagName === "A" &&
      menuMobileElement.classList.contains("header__menu--open")
    ) {
      menuOpenClose();
    } else return;
  });

  overlayElement.addEventListener("click", menuOpenClose);
}

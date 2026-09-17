const newsShowMoreBtn = document.querySelector("[data-news-show-more]");

export function toggleNews() {
  if (newsShowMoreBtn) {
    newsShowMoreBtn.addEventListener("click", event => {
      const wrapperNewsElement = document.querySelector("[data-news-list]");
      const newsElements = wrapperNewsElement.querySelectorAll("[data-news]");
      const isHidden = wrapperNewsElement.querySelector("[hidden]");
      const textBtnElement = newsShowMoreBtn.querySelector("[data-btn-text]");
      const qvery = window.matchMedia("(width <= 576px)");
      if (isHidden) {
        if (qvery.matches) {
          newsElements.forEach(element => {
            if (element.matches("[data-mobile-hidden-news]")) {
              element.classList.add("news--expanded");

              element.animate(
                [
                  { opacity: 0, transform: "translateY(20px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 400,
                  easing: "ease-out",
                },
              );
            } else if (element.matches("[data-extra-news]")) {
              element.removeAttribute("hidden");

              element.animate(
                [
                  { opacity: 0, transform: "translateY(20px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 400,
                  easing: "ease-out",
                },
              );
            } else return;
          });
        } else {
          newsElements.forEach(element => {
            if (element.matches("[data-extra-news]")) {
              element.removeAttribute("hidden");

              element.animate(
                [
                  { opacity: 0, transform: "translateY(20px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 400,
                  easing: "ease-out",
                },
              );
            }
          });
        }
      } else {
        if (qvery.matches) {
          newsElements.forEach(element => {
            if (element.matches("[data-mobile-hidden-news]")) {
              const animation = element.animate(
                [
                  { opacity: 1, transform: "translateY(0)" },
                  { opacity: 0, transform: "translateY(20px)" },
                ],
                { duration: 400, easing: "ease-out" },
              );

              animation.onfinish = () => {
                element.classList.remove("news--expanded");
              };
            } else if (element.matches("[data-extra-news]")) {
              const animation = element.animate(
                [
                  { opacity: 1, transform: "translateY(0)" },
                  { opacity: 0, transform: "translateY(20px)" },
                ],
                { duration: 400, easing: "ease-out" },
              );
              animation.onfinish = () => {
                element.setAttribute("hidden", "");
              };
            } else return;
          });
        } else {
          newsElements.forEach(element => {
            if (element.matches("[data-extra-news]")) {
              const animation = element.animate(
                [
                  { opacity: 1, transform: "translateY(0)" },
                  { opacity: 0, transform: "translateY(20px)" },
                ],
                { duration: 400, easing: "ease-out" },
              );
              animation.onfinish = () => {
                element.setAttribute("hidden", "");
              };
            } else return;
          });
        }
      }

      if (isHidden) {
        textBtnElement.textContent = "Скрыть";
        newsShowMoreBtn.setAttribute("aria-expanded", "true");
      } else {
        textBtnElement.textContent = "Показать еще";
        newsShowMoreBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
}

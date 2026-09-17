function initReviewPhotos() {
  const listReviewElement = document.querySelector(".reviews__grid");

  if (listReviewElement) {
    listReviewElement.addEventListener("click", event => {
      const showReviewPhotosBtn = event.target.closest(
        "[data-show-review-photos]",
      );

      if (showReviewPhotosBtn) {
        const localСellElement = showReviewPhotosBtn.closest(
          ".review-card__content",
        );

        const extraPhotoElements =
          localСellElement.querySelectorAll("[data-extra-photo]");

        extraPhotoElements.forEach(element => {
          element.toggleAttribute("hidden");
        });

        const isStillHidden = extraPhotoElements?.[0].hasAttribute("hidden");

        if (!isStillHidden) {
          showReviewPhotosBtn.textContent = "Скрыть";
          showReviewPhotosBtn.setAttribute("aria-expanded", "true");
        } else {
          showReviewPhotosBtn.textContent = "Смотреть все фото";
          showReviewPhotosBtn.setAttribute("aria-expanded", "false");
        }
      }

      const photoBtn = event.target.closest("[data-lightbox-image]");
      if (photoBtn) {
        const photosGalleryElement = photoBtn.closest("[data-review-gallery]");
        if (!photosGalleryElement) return;
        const photosList = photosGalleryElement.querySelectorAll(
          "[data-lightbox-image]",
        );

        const sources = Array.from(photosList)
          .map(photo => {
            const img = photo.querySelector("img");
            return img ? img.getAttribute("src") : "";
          })
          .filter(src => src !== "");

        const clickedIndex = Array.from(photosList).indexOf(photoBtn);

        // Создаем временный объект изображения, чтобы узнать реальный размер текущего файла
        const tempImg = new Image();
        tempImg.src = sources[clickedIndex];

        tempImg.onload = () => {
          // Ждем, пока браузер прочитает файл и узнает его настоящие размеры
          const realWidth = tempImg.naturalWidth;
          const realHeight = tempImg.naturalHeight;

          const lightbox = new window.FsLightbox();
          lightbox.props.sources = sources;
          lightbox.props.disableMicroHeightCorrection = true;
          lightbox.props.types = sources.map(() => "image");

          // Передаем реальные динамические размеры через кастомные атрибуты для каждого источника
          lightbox.props.customAttributes = sources.map(() => ({
            "data-width": realWidth,
            "data-height": realHeight,
          }));

          lightbox.open(clickedIndex);
        };
      }
    });
  }
}

function initMoreReviews() {
  const reviewsShowMoreBtn = document.querySelector("[data-reviews-show-more]");
  if (reviewsShowMoreBtn) {
    reviewsShowMoreBtn.addEventListener("click", () => {
      const listReviewElement = reviewsShowMoreBtn.closest(
        ".reviews__container",
      );

      if (!listReviewElement) return;
      const extraReviewElements = listReviewElement.querySelectorAll(
        "[data-extra-review]",
      );

      if (!extraReviewElements.length) return;

      const isOpening = extraReviewElements[0].hasAttribute("hidden");

      extraReviewElements.forEach(element => {
        if (isOpening) {
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
        } else {
          const animation = element.animate(
            [
              { opacity: 1, transform: "translateY(0)" },
              { opacity: 0, transform: "translateY(20px)" },
            ],
            {
              duration: 300,
              easing: "ease-in",
            },
          );

          animation.onfinish = () => {
            element.setAttribute("hidden", "");
          };
        }
      });

      const textBtnElement =
        reviewsShowMoreBtn.querySelector("[data-btn-text]");

      if (textBtnElement) {
        if (isOpening) {
          textBtnElement.textContent = "Скрыть";
          reviewsShowMoreBtn.setAttribute("aria-expanded", "true");
        } else {
          textBtnElement.textContent = "Показать еще";
          reviewsShowMoreBtn.setAttribute("aria-expanded", "false");
        }
      }
    });
  }
}

export function initReviews() {
  initReviewPhotos();
  initMoreReviews();
}

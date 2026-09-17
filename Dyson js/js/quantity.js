const containerSwiper = document.querySelector("[data-special-offers-slider]");

function calculator() {
  containerSwiper.addEventListener("click", event => {
    const increaseBtn = event.target.closest("[data-quantity-increase]");
    const decreaseBtn = event.target.closest("[data-quantity-decrease]");

    if (increaseBtn || decreaseBtn) {
      const activeBtn = increaseBtn || decreaseBtn;
      const quantityContainerElement = activeBtn.parentElement;
      const quantityElement = quantityContainerElement.querySelector(
        "[data-quantity-value]",
      );
      const decreaseBtnElement = quantityContainerElement.querySelector(
        "[data-quantity-decrease]",
      );
      let currentQuantity = parseInt(quantityElement.textContent, 10) || 1;

      if (increaseBtn) {
        quantityElement.textContent = ++currentQuantity;
      }

      if (decreaseBtn && currentQuantity > 1) {
        quantityElement.textContent = --currentQuantity;
      }

      decreaseBtnElement.toggleAttribute("disabled", currentQuantity === 1);
    }
  });
}

function addProductToCart() {
  containerSwiper.addEventListener("submit", event => {
    event.preventDefault();
    const cardProductElement = event.target.closest(".special-offers__item");

    if (cardProductElement) {
      const price = Number(
        cardProductElement
          .querySelector(".product-card__price")
          .getAttribute("value"),
      );
      const quantity = parseInt(
        cardProductElement.querySelector("[data-quantity-value]").textContent,
      );

      const product = {
        id: cardProductElement.dataset.cardId,
        price,
        quantity,
      };

      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      cardProductElement.querySelector("[data-quantity-value]").textContent =
        "1";

      const decreaseBtn = cardProductElement.querySelector(
        "[data-quantity-decrease]",
      );

      if (decreaseBtn) {
        decreaseBtn.setAttribute("disabled", "");
      }
    }
  });
}

export { calculator, addProductToCart };

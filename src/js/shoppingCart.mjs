import { getLocalStorage } from './utils.mjs';
import { renderListWithTemplate } from './utils.mjs';

export default function ShoppingCart() {
  let cartItems = getLocalStorage('so-cart') || [];
  if (!Array.isArray(cartItems)) {
    cartItems = [cartItems];
  }
  const outputElement = document.querySelector('.product-list');
  renderListWithTemplate(cartItemTemplate, outputElement, cartItems);
}

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
}

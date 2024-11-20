import { getProductsByCategory } from './externalServices.mjs';
import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Images.PrimaryMedium}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

export default async function productList(selector, category) {
  (await document.readyState) === 'complete' ||
    new Promise((resolve) => {
      document.addEventListener('DOMContentLoaded', resolve);
    });

  const el = document.querySelector(selector);
  const titleEl = document.querySelector('.title');
  const products = await getProductsByCategory(category);

  if (el && titleEl) {
    renderListWithTemplate(productCardTemplate, el, products);
    titleEl.innerHTML = category;
  }
}

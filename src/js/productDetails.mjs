import { findProductById } from './productData.mjs';
import { setLocalStorage, getLocalStorage } from './utils.mjs';

let product = {};

export default async function productDetails(productId) {
  product = await findProductById(productId);
  renderProductDetails();
  document.getElementById('addToCart').addEventListener('click', addToCart);
}
function addToCart() {
  let products = getLocalStorage('so-cart') || [];
  if (!Array.isArray(products)) {
    products = [products];
  }
  products.push(product);
  setLocalStorage('so-cart', products);
}
function renderProductDetails() {
  document.querySelector('#productName').innerText = product.Brand.Name;
  document.querySelector('#productNameWithoutBrand').innerText =
    product.NameWithoutBrand;
  document.querySelector('#productImage').src = product.Image;
  document.querySelector('#productImage').alt = product.Name;
  document.querySelector('#productFinalPrice').innerText = product.FinalPrice;
  document.querySelector('#productColorName').innerText =
    product.Colors[0].ColorName;
  document.querySelector('#productDescriptionHtmlSimple').innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector('#addToCart').dataset.id = product.Id;
}

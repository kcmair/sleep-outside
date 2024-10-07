import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  let existingItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  existingItems.push(product);
  localStorage.setItem("so-cart", JSON.stringify(existingItems));
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

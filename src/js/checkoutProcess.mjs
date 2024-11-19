import { getLocalStorage } from './utils.mjs';

function calculateItemTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    const itemPrice = item.FinalPrice || item.ListPrice;
    return total + itemPrice;
  }, 0);
}

function calculateShipping(cartItems) {
  const itemCount = cartItems.length;
  if (itemCount === 0) return 0;
  return 10 + (itemCount - 1) * 2;
}

function calculateTax(subtotal) {
  return subtotal * 0.06;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

function displayOrderTotal() {
  const cartItems = getLocalStorage('so-cart') || [];
  const cartItemsCount = cartItems.length;
  const subtotal = calculateItemTotal(cartItems);
  const shipping = calculateShipping(cartItems);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  document.querySelector('.summary-items').innerHTML = `
    <div class="summary-line"><label>Item Subtotal(${cartItemsCount})</label><span>${formatCurrency(
    subtotal
  )}</span></div>
    <div class="summary-line"><label>Shipping Estimate</label><span>${formatCurrency(
      shipping
    )}</span></div>
    <div class="summary-line"><label>Tax</label><span>${formatCurrency(
      tax
    )}</span></div>
    <div class="summary-line total"><label>Order Total</label><span>${formatCurrency(
      total
    )}</span></div>
  `;
}

export default function checkoutProcess() {
  displayOrderTotal();

  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const success = await submitOrder(e.target);
    if (success) {
      localStorage.removeItem('so-cart');
      location.href = '/checkout/success.html';
    }
  });
}

function packageItems(items) {
  return items.map((item) => ({
    id: item.Id,
    name: item.Name,
    price: item.FinalPrice || item.ListPrice,
    quantity: 1,
  }));
}

async function submitOrder(form) {
  const cartItems = getLocalStorage('so-cart') || [];
  const subtotal = calculateItemTotal(cartItems);
  const shipping = calculateShipping(cartItems);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  const order = {
    orderDate: new Date().toISOString(),
    fname: form.fname.value,
    lname: form.lname.value,
    street: form.street.value,
    city: form.city.value,
    state: form.state.value,
    zip: form.zip.value,
    cardNumber: form.cardNumber.value,
    expiration: form.expiration.value,
    code: form.code.value,
    items: packageItems(cartItems),
    orderTotal: total.toFixed(2),
    shipping: shipping.toFixed(2),
    tax: tax.toFixed(2),
  };

  const response = await fetch(
    'http://server-nodejs.cit.byui.edu:3000/checkout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    }
  );

  return response.ok;
}

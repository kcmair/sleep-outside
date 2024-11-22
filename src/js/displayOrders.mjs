import { getOrders } from './externalServices.mjs';
import { checkLogin } from './auth.mjs';

checkLogin();

export async function displayOrders() {
  const token = localStorage.getItem('so_token');
  try {
    const orders = await getOrders(token);
    const orderList = document.querySelector('.order-list');

    // Add grid header
    const headerRow = document.createElement('div');
    headerRow.classList.add('order-grid', 'header');
    headerRow.innerHTML = `
      <span>Order #</span>
      <span>Date</span>
      <span>Total</span>
      <span>Items</span>
    `;
    orderList.appendChild(headerRow);

    orders.forEach((order) => {
      const orderDate = new Date(order.orderDate).toLocaleDateString();
      const itemCount = order.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      const orderElement = document.createElement('div');
      orderElement.classList.add('order-grid');
      orderElement.innerHTML = `
        <span>#${order.id}</span>
        <span>${orderDate}</span>
        <span>${order.orderTotal}</span>
        <span>${itemCount}</span>
      `;

      orderList.appendChild(orderElement);
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}

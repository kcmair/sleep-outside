const baseURL = import.meta.env.VITE_SERVER_URL;
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: data };
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(payload) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(baseURL + 'checkout/', options);
  return await convertToJson(response);
}

export async function loginRequest(creds) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(creds),
  };

  const response = await fetch(
    'http://server-nodejs.cit.byui.edu:3000/login',
    options
  );
  const data = await response.json();
  // eslint-disable-next-line no-debugger
  debugger;

  if (response.ok) {
    localStorage.setItem('so_token', data.accessToken);
    return data;
  } else {
    throw new Error(data.message);
  }
}

export async function getOrders(token) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + 'orders/', options);
  return await convertToJson(response);
}

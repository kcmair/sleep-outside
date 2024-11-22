import { loginRequest } from './externalServices.mjs';
import { jwtDecode } from 'jwt-decode';

export async function login(creds, redirect = '/') {
  try {
    const data = await loginRequest(creds);
    console.log('data =', data);
    window.location = redirect;
  } catch (err) {
    console.log(err);
  }
}

export function checkLogin() {
  const token = localStorage.getItem('so_token');
  console.log('token =', token);
  if (!token || !isTokenValid(token)) {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');

    const path = window.location.pathname;
    window.location = `/login/index.html?redirect=${path}`;
  }
}

export function isTokenValid(token) {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      console.log('Token has expired');
      return false;
    }

    return true;
  } catch (error) {
    console.log('Invalid token');
    return false;
  }
}

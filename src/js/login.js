import { getParam, loadHeaderFooter } from './utils.mjs';
import { login } from './auth.mjs';

loadHeaderFooter();

const redirect = getParam('redirect');

document.querySelector('#loginButton').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  login({ email: username, password }, redirect);
});

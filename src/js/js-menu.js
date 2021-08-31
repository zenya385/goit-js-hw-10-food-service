import teamplate from '../templates/item.hbs';
import menuJs from '../menu.json';

const createMenuJsCards = document.querySelector('.js-menu');
const menuMarkup = teamplate(menuJs);
createMenuJsCards.innerHTML = menuMarkup;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

themeToggle.addEventListener('change', onToggleTheme);
function onToggleTheme() {
  const theme = themeToggle.checked ? Theme.DARK : Theme.LIGHT;
  updateDataLocalStorage(theme);
  updateClassBody(theme);
}

function updateClassBody(className) {
  body.className = className;
}

function updateDataLocalStorage(value) {
  localStorage.setItem('theme', value);
}

function start() {
  const data = localStorage.getItem('theme') || Theme.LIGHT;
  updateClassBody(data);
  themeToggle.checked = data === Theme.DARK;
}

start();

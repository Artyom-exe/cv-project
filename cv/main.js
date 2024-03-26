import { renderNav } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { renderBloc } from './components/bloc.js';
import '/assets/base.css';
import '/assets/style.css';
import cv from './cv.json';


const app = document.getElementById('app');

const competences = cv.competences.map((comp) => {
  return `
    <li>${comp}</li>
    `
}).join('')



app.innerHTML = `
  ${renderNav()}
  ${renderFooter()}
`;

document.getElementById('app').innerHTML = cv.map(user => renderBloc(user)).join('');
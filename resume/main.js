import { renderNav } from '/components/nav.js';
import { renderFooter } from '/components/footer.js';
import { renderBloc } from '/components/bloc.js';
import '/assets/base.css';
import '/assets/style.css';
import cv from '/cv.json';


const app = document.getElementById('app');

const competences = cv.competences.map((comp) => {
  return `
    <li>${comp}</li>
    `
}).join('')

  const experiences = cv.experience1.map((exp) => {
  return `
  <li>${exp}</li>
  `
}).join('')

app.innerHTML = `
  ${renderNav()}
  <div id="entete"></div>
  <div id="main"><ul>${experiences}</ul></div>
  ${renderFooter()}
`;


document.getElementById('main').innerHTML = cv.experience1.map(user => renderBloc(user)).join('');

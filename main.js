import { renderNav } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { renderCard } from './components/card.js';
import '/assets/base.css';
import '/assets/style.css';
import cv from './cv.json';


const app = document.getElementById('app');

app.innerHTML = `
  ${renderNav()}
  <div id="mainBox">
  <div id="boxLeft"></div>
    <div id="about">
      <div id="cards-container"></div>
      <div id="info-container">
        <h1>Hello</h1>
        <h2>${cv.introduction}</h2>
        <p><input type="button" value="RESUME">
        <input type="button" value="PROJECTS"></p>
        <p>${cv.description}</p>
    </div>
    </div>
  </div>
  ${renderFooter()}
`;

document.getElementById('cards-container').innerHTML = cv.aboutMe.map(user => renderCard(user)).join('');
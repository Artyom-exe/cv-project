import { renderNav } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { renderCard } from './components/card.js';
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
  <div id="mainBox">
  <div id="boxLeft"></div>
    <div id="about">
      <div id="cards-container"></div>
      <div id="info-container">
        <h1>Hello</h1>
        <h2>Here's who I am & what I do</h2>
        <p><input type="button" value="RESUME">
        <input type="button" value="PROJECTS"></p>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to</p>
        <p>add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </div>
    </div>
  </div>
  ${renderFooter()}
`;

document.getElementById('cards-container').innerHTML = cv.aboutMe.map(user => renderCard(user)).join('');
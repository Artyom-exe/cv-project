import { renderNav } from '/components/nav.js';
import { renderFooter } from '/components/footer.js';
import '/style.css';


const app = document.getElementById('app');

app.innerHTML = `
  ${renderNav()}
    <div id="cards-container"><h1>À propos</h1></div>
  ${renderFooter()}
`;


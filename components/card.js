export function renderCard(user) {
  return `
    <div class="card">
      <div class="main-card">
        <img src="${user.image}" alt="${user.nom}" class="card-img">
        <p class="card-title">${user.nom} <br> ${user.prenom}</p>
        <p class="card-line"></p>
        <p class="card-info">${user.job}</p>
      </div>
      <div class="footer-card">
        <img src="${user.facebook}" alt="logo facebook" class="card-img">
        <img src="${user.instagram}" alt="logo instagram" class="card-img">
        <img src="${user.linkedin}" alt="logo linkedin" class="card-img">
      </div>
    </div>
  `;
}
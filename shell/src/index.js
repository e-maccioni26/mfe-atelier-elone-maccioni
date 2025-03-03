import('header/Header')
  .then(({ Header }) => {
    document.body.prepend(Header());
  })
  .catch(err => console.error('Erreur lors du chargement du micro frontend header:', err));

const main = document.createElement('main');
main.innerHTML = `<p>Bienvenue dans le Shell de l'application MFE</p>`;
document.body.appendChild(main);

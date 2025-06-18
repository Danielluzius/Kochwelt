const recipes = [
  {
    image: './img/kochkaese-schnitzel.jpg',
    title: 'Kochkäse Schnitzel',              // Informationen zum Rezept1
    text: 'Beschreibung für Rezept 1.',
    link: 'recipe1.html'
  },
  {
    image: './img/sandwich.jpg',
    title: 'Das Feedback-Sandwich',          // Informationen zum Rezept2
    text: 'Beschreibung für Rezept 2.',
    link: 'recipe2.html'
  },
  {
    image: './img/pizza.png',
    title: 'Italienische Pizza',              // Informationen zum Rezept3
    text: 'Beschreibung für Rezept 3.',
    link: 'recipe3.html'
  }
];

let currentRecipe = 0;

function showRecipe(index) {           //logic zum auslesen der informationen
  document.getElementById('recipe-img').src = recipes[index].image;
  document.getElementById('recipe-title').textContent = recipes[index].title;
  document.getElementById('recipe-text').textContent = recipes[index].text;
  document.getElementById('recipe-btn').onclick = () => window.location.href = recipes[index].link;
}

document.addEventListener('DOMContentLoaded', () => {    //ausführen beim laden der Seite?
  showRecipe(currentRecipe);
  setInterval(() => {
    currentRecipe = (currentRecipe + 1) % recipes.length;
    showRecipe(currentRecipe);
  }, 10000);    // intervall von 10 sekunden angegeben in millisekunden
});

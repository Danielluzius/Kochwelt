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
    text: 'Zwischen zwei weichen Brotscheiben liegen Romanasalat, dünn geschnittene Tomaten, <br>Gurken und feiner Lachs. Ein fein abgeschmecktes Senf-Dressing <br>mit Dill rundet das Ganze ab. Perfekt als leichter Lunch oder für unterwegs.',
    link: 'recipe2.html'
  },
  {
    image: './img/pizza.png',
    title: 'Italienische Pizza',              // Informationen zum Rezept3
    text: 'Italienische Pizza – dünner, knuspriger Teig, fruchtige Tomatensauce, <br> frischer Mozzarella und aromatische Kräuter. Traditionell im Steinofen gebacken, <br> einfach, ehrlich und voller Geschmack. 🍕.',
    link: 'recipe3.html'
  }
];

let currentRecipe = 0;   //vriable für das aktuelle Rezept, startet bei 0

function showRecipe(index) {           //logic zum auslesen der informationen
  document.getElementById('recipe-img').src = recipes[index].image;
  document.getElementById('recipe-title').textContent = recipes[index].title;
  document.getElementById('recipe-text').textContent = recipes[index].text;
  document.getElementById('recipe-btn').onclick = () => window.location.href = recipes[index].link;
  document.getElementById('recipe-text').innerHTML = recipes[index].text;
  document.getElementById('nav-rezept-des-tages').href = recipes[index].link;
}

document.addEventListener('DOMContentLoaded', () => {    //ausführen beim laden der Seite?
  showRecipe(currentRecipe);
  setInterval(() => {
    currentRecipe = (currentRecipe + 1) % recipes.length;
    showRecipe(currentRecipe);
  }, 10000);    // intervall von 10 sekunden angegeben in millisekunden
});

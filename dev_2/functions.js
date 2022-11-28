'use strict';

// function for creating a cocktail card
const createCocktailCard = (
  name,
  imgUrl,
  id,
  instructions,
  ingredients,
  measurements,
  glass,
  alcoholic
) => {

  // create a div for the card
  const cocktailCard = document.createElement('div');

  // add class to the card
  cocktailCard.classList.add('cocktail');

  // create a h3 for the name of the cocktail
  const h3 = document.createElement('h3');
  h3.textContent = name;
  cocktailCard.appendChild(h3);

  // create an img for the cocktail
  const img = document.createElement('img');
  img.src = imgUrl;
  img.alt = name;
  cocktailCard.appendChild(img);

  // create a p for the drink id
  const drinkId = document.createElement('p');
  drinkId.textContent = ` Drink Id: ${id}`;
  cocktailCard.appendChild(drinkId);

  // create a ul for the ingredients
  const clickHere = document.createElement('p');
  clickHere.textContent = `Click here for more info`;
  cocktailCard.appendChild(clickHere);

  // add event listener to the card that when clicked will create a spotlight modal
  cocktailCard.addEventListener('click', (e) => {
    const spotlight = createCocktailSpotlight(
      name,
      imgUrl,
      id,
      instructions,
      ingredients,
      measurements,
      glass,
      alcoholic
    );
    document.body.appendChild(spotlight);
  });
  return cocktailCard;
};

// function for creating the spotlight modal
const createCocktailSpotlight = (
  name,
  imgUrl,
  id,
  instructions,
  ingredients,
  measurements,
  glass,
  alcoholic
) => {
  // create a div for the spotlight modal
  const cocktailSpotlight = document.createElement('div');

  // add an id to the spotlight modal
  cocktailSpotlight.id = 'spotlight';

  // create a div for the spotlight card
  const card = document.createElement('div');

  // add an id to the spotlight card
  card.id = 'spotlight-card';

  // create a h1 for the name of the cocktail
  const h1 = document.createElement('h1');
  h1.textContent = name;
  card.appendChild(h1);

  // create an img for the cocktail
  const img = document.createElement('img');
  img.src = imgUrl;
  img.alt = name;
  card.appendChild(img);

  // create a p for the drink id
  const drinkId = document.createElement('p');
  drinkId.textContent = ` Drink Id: ${id}`;
  card.appendChild(drinkId);

  // create a p for the ingredients list
  const ingredientsList = document.createElement('ul');
  ingredientsList.textContent = `Ingredients: ${ingredients}`;
  card.appendChild(ingredientsList);

  // create a p for the measurements list
  const drinkMeasurements = document.createElement('p');
  drinkMeasurements.textContent = `Measurements: ${measurements}`;
  card.appendChild(drinkMeasurements);

  // create a p for the glass
  const drinkGlass = document.createElement('p');
  drinkGlass.textContent = `Glass: ${glass}`;
  card.appendChild(drinkGlass);

  // create a p for the alcoholic content
  const drinkAlcoholic = document.createElement('p');
  drinkAlcoholic.textContent = `Alcoholic: ${alcoholic}`;
  card.appendChild(drinkAlcoholic);

  // create a p for the instructions
  const drinkInstructions = document.createElement('p');
  drinkInstructions.textContent = `Instructions: ${instructions}`;
  card.appendChild(drinkInstructions);

  // append the card to the spotlight modal
  cocktailSpotlight.appendChild(card);

  // add event listener to the spotlight modal that when clicked will remove the spotlight modal
  cocktailSpotlight.addEventListener('click', (e) => {
    cocktailSpotlight.remove();
  });

  return cocktailSpotlight;
};

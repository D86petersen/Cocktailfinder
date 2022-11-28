'use strict';

// Event listener for search button click
document.getElementById('search-button').addEventListener('click', (e) => {
  // Prevent default action
  e.preventDefault();

  // Get user input from input field
  const cocktailName = document.getElementById('search-input').value;
  document.getElementById('output-container').innerHTML = '';

  // If else statement to check if user input is empty, if user input is empty, alert user to enter a cocktail name
  // if user input is not empty, run getCocktails function
  if (cocktailName === '') {
    const error = document.getElementById('error');
    error.innerHTML = 'Please enter a cocktail name';
    error.style.color = 'red';
    error.style.textAlign = 'center';
    setTimeout(() => {
      error.innerHTML = '';
    }, 3000);
  } else {
    // Run getCocktails function
    getCocktails(cocktailName).then((data) => {
      // If else statement to check if the server returned with data if data is returned null then display error message
      console.log(data);
      if (data.drinks === null) {
        const error = document.getElementById('error');
        error.innerHTML = 'No cocktails found';
        error.style.color = 'red';
        error.style.textAlign = 'center';
        setTimeout(() => {
          error.innerHTML = '';
          document.getElementById('user-input').reset();
        }, 3000);
      } else {
        // if data is not null then iterate through using for loop
        // assigned a variable to the data returned from the api
        const drinks = data.drinks;
        // iterate through the data using a for loop
        for (let i = 0; i < drinks.length; i++) {
          // create variables for the individual data points
          const drink = drinks[i];
          const name = drink.strDrink;
          const imgUrl = drink.strDrinkThumb;
          const id = drink.idDrink;
          const drinkInstructions = drink.strInstructions;
          const glass = drink.strGlass;
          const alcoholic = drink.strAlcoholic;
          // create empty arrays for the ingredients and measurements data
          const ingredients = [];
          const measurements = [];
          // iterate through the data using a for loop
          for (let j = 1; j < 16; j++) {
            const ingredient = drink[`strIngredient${j}`];
            const measurement = drink[`strMeasure${j}`];
            // if else statement to check if the ingredient is not null then push the ingredient and measurement to the empty arrays
            if (ingredient !== null) {
              ingredients.push(ingredient);
            }
            if (measurement !== null) {
              measurements.push(measurement);
            }
          }
          // assigned a variable to the createCocktailCard function and passed in the data points
          const cocktailCard = createCocktailCard(
            name,
            imgUrl,
            id,
            drinkInstructions,
            ingredients,
            measurements,
            glass,
            alcoholic
          );
            // grabbed the output container and appended the cocktailCard variable to the output container
          document.getElementById('output-container').appendChild(cocktailCard);
            // reset the user input field
          document.getElementById('user-input').reset();
        }
      }
    });
  }
});

'use strict';

// request to the api server for the data 
// used async await to get the data from the api
// passed in the cocktail name to the api
const getCocktails = async (cocktailName) => {
  // create a variable for the response from the api call
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  );
  // used if else statement to check if the response was good and if not display an error message
  if (response.status === 200) {
    // if the response was good then return the data from the api and parse it
    const data = response.json();
    return data;
  } else {
    const error = document.getElementById('error');
    error.innerHTML = 'An error has occurred';
    error.style.color = 'red';
    error.style.textAlign = 'center';
    setTimeout(() => {
      error.innerHTML = '';
    }, 3000);
  }
};




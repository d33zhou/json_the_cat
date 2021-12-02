const request = require('request');

/* request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
 
  if (error) return console.log("Error: Request failed.", error);

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed '${breed}' was not found`);
    } else {
      console.log(data[0].description);
    }
  }); */

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let data;

    !error ? data = JSON.parse(body) : "";

    if (error || data.length === 0) {
      callback(`Error - please try again. ${error ? error : 'No breed found.'}`, null);
    } else {
      callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
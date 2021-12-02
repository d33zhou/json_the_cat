const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) return console.log("Error: Request failed.", error);

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Breed '${breed}' was not found`);
  } else {
    console.log(data[0].description);
  }
});
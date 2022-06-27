// CORS - Cross - Origin Resource Sharing

var name = "John";

fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) =>
  console.log(response)
);

// http://127.0.0.1:5502/jun/27-06/CORS/index.html - origin of the request
// made a request to "https://pokeapi.co/api/v2/pokemon/ditto"

// Example: every origin can make a request
// access-control-allow-origin: *

// Example: Only certain origins can make a request
// Example: Origin - https://www.mcdonalds.com

// Example: API - https://www.mcdonalds.com/api
// access-control-allow-origin: https://www.mcdonalds.com

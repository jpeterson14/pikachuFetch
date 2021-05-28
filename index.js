/* Don't worry about this stuff, it's provided! */
const fetch = require("node-fetch")
function parseResponse(response){
  return response.json()
}
function logResponse(response){
  console.log(response)
}

// Instructions:
// "https://pokeapi.co/api/v2/pokemon/pikachu"1. Make a fetch request to this URL: 
// 2. Verify that a Pikachu object outputs to the screen
// 3. Try some different pokemon and see what happens!

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(res=>res.json())
.then(pikachu=> console.log(pikachu))
// Write your fetch code here!
function displayTrip(response) {
  console.log("trip generated");
  new Typewriter("#ai-answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTrip(event) {
  event.preventDefault();

  //let aiAnswerElement = document.querySelector("#ai-answer");

  let userInput = document.querySelector("#user-input");
  let apiKey = "4569530f182bfa0dfo5t468f004ad4c8";
  let prompt = `User input: Generate a trip for ${userInput.value}`;
  let context =
    "You are a travel expert who has travelled the whole world and knows the best spots and highlights of each city and country in the world. Your mission is to generate a 10 line trip suggestion. Make sure to follow the user input.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating trip");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayTrip);
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateTrip);

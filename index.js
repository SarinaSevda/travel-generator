function generateTrip(event) {
  event.preventDefault();

  let aiAnswerElement = document.querySelector("#ai-answer");

  new Typewriter("#ai-answer", {
    strings: "AI answer will be here!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateTrip);

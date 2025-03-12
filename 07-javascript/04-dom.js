// Exercise #1: Click Event - Copy input to output when button is clicked

// Fetching elements
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputDiv = document.querySelector(".output");

// Event listener for button click
copyButton.addEventListener("click", () => {
  outputDiv.textContent = userInput1.value; // Copy input value to output div
});

// Exercise #2: Input Event - Live update output when typing

// Fetching elements
const userInput2 = document.getElementById("userInput2");
const inputEventExample = document.querySelector("#inputEventExample p");

// Event listener for input event
userInput2.addEventListener("input", () => {
  inputEventExample.textContent = userInput2.value; // Update output dynamically
});

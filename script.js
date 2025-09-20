// Part 2: Functions, Scope & Parameters

// Global variable
let globalMultiplier = 2;

// Function with parameter & return value
function square(num) {
  // local variable
  let result = num * num * globalMultiplier;
  return result;
}

// Function to display result in DOM
function showSquare(num) {
  const output = document.getElementById("function-result");
  output.textContent = `Square of ${num} * multiplier = ${square(num)}`;
}

// Part 3: Combining CSS + JS
const button = document.getElementById("triggerAnimation");
const box = document.querySelector(".js-box");

button.addEventListener("click", () => {
  box.classList.toggle("active"); // Add/remove CSS class to animate
});

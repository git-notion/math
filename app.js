// Render the math when the button is clicked
function renderMath() {
  const input = document.getElementById("mathInput").value.trim();
  const outputDiv = document.getElementById("output");

  if (input === "") {
    outputDiv.innerHTML = "<p>Please enter a math expression!</p>";
    return;
  }

  // Clean the output
  outputDiv.innerHTML = "";

  // Create a new element to insert math
  const mathElement = document.createElement("p");
  mathElement.innerHTML = `\\(${input}\\)`; // Render LaTeX syntax
  outputDiv.appendChild(mathElement);

  // Trigger MathJax to process the math
  MathJax.typesetPromise([mathElement]).catch(function (err) {
    console.error(err.message);
    outputDiv.innerHTML = "<p style='color: red;'>Error in expression!</p>";
  });
}

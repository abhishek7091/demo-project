// Function to append values to the display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to evaluate the expression in the display
function calculate() {
  try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

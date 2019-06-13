/////////////////////////////////////////////////
// Variables
/////////////////////////////////////////////////

// Initialize Variables
var numSquares = 6;
var colors = []
var pickedColor;

// Initialize Selectors
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');


/////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////

// Initialization
function init() {
  setupButtons();
  setupSquares();
  reset();
}

// Setup Buttons
function setupButtons() {
  for (var i = 0; i < modeButtons.length; ++i) {
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
  resetButton.addEventListener('click', function () {
    reset();
  });
}

// Setup Squares
function setupSquares() {
  for (var i = 0; i < squares.length; ++i) {
    // add click listeners to squares
    squares[i].addEventListener('click', function(){
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // Compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again?';
      } else {
        this.style.backgroundColor = 'transparent';
        messageDisplay.textContent = 'Try again.'
      }
    });
  }
}

// Reset Game
function reset() {
  // Generate all new colors
  colors = generateRandomColors(numSquares);
  // Pick a new random color from array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // Change colors of squares
  for (var i = squares.length - 1; i >= 0; i--) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  // Reset button textContent
  resetButton.textContent = 'New Colors';
  // Reset h1 backgroundColor
  h1.style.backgroundColor = '';
  // Clear message
  messageDisplay.textContent = "";
}

// Change Colors
function changeColors(color) {
  // Loop through all squares
  for (var i = squares.length - 1; i >= 0; i--) {
    // Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

// Pick a Color From colors List
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generate List of Random Colors
function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // Add num random colors to array
  for (var i = 0; i < num; ++i) {
    // Get random color and push into arr
    arr.push(randomColor());
  }
  // Return that array
  return arr;
}

// Generate a Random RGB Color
function randomColor() {
  // Pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  // Put it all together and return
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


/////////////////////////////////////////////////
// Run The Great RGB Color Guessing Game
/////////////////////////////////////////////////

init();
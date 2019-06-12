var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; ++i) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; ++i) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function () {
  // Generate all new colors
  colors = generateRandomColors(numSquares);
  // Pick a new random color from array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // Change colors of squares
  for (var i = squares.length - 1; i >= 0; i--) {
    squares[i].style.backgroundColor = colors[i];
  }
  // Reset button textContent
  resetButton.textContent = 'New Game';
  // Reset h1 backgroundColor
  h1.style.backgroundColor = '';
  // Clear message
  messageDisplay.textContent = "";
})


for (var i = 0; i < squares.length; ++i) {
  // Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

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

function changeColors(color) {
  // Loop through all squares
  for (var i = squares.length - 1; i >= 0; i--) {
    // Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

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
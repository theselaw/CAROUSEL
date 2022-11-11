// Grab elements from DOM
const images = document.querySelectorAll(".slider img");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let slideIndex = 0;
let imagesLength = images.length - 1; // 6

changeImage(0); // using this to initialize the slider

function changeImage(index) {
  // removes the visiblity of each of the images
  images.forEach((image) => {
    image.style.opacity = 0;
  });

  //   turns on visibily of image at desired index
  images[index].style.opacity = 1;
}

prevButton.addEventListener("click", () => {
  // slideIndex is still 0
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = imagesLength;
  }

  //   slideIndex is now !
  changeImage(slideIndex);
});

nextButton.addEventListener("click", () => {
  // slideIndex is still 0
  slideIndex++;

  if (slideIndex > imagesLength) {
    slideIndex = 0;
  }

  //   slideIndex is now !
  changeImage(slideIndex);
});

// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);
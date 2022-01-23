const images = ["0.jpg", "1.jpg"];
const imageIndex = Math.floor(Math.random() * images.length);
console.log(`imageIndex: ${imageIndex}`);
const chosenImage = images[imageIndex];
document.body.style.backgroundImage = `url(img/${chosenImage})`;

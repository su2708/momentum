const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

document.body.style = `background-image: url(images/${chosenImage}); background-size: 100% 100%;`;
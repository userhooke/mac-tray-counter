const fs = require("fs");
const { createCanvas } = require("canvas");

const HEIGHT = 20;
const WIDTH = 32;

const canvas = createCanvas(WIDTH, HEIGHT);
const context = canvas.getContext("2d");

context.fillStyle = "#fff";
context.font = "regular 18px 'Helvetica Neue'";
context.textAlign = "right";

for (let i = 0; i <= 140; i++) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (i > 25) {
    context.fillStyle = "orange";
  }

  if (i > 45) {
    context.fillStyle = "tomato";
  }

  context.fillText(i, 31, 17);
  fs.writeFileSync(`./icons/${i}.png`, canvas.toBuffer("image/png"));
}

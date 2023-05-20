const fs = require("fs");
const { createCanvas } = require("canvas");

// const canvas = document.querySelector("canvas");
// canvas.width = 128;
// canvas.height = 128;

const canvas = createCanvas(128, 128);
const context = canvas.getContext("2d");

context.fillStyle = "orange";
context.font = "bold 115px sans-serif";
context.fillText("26", 0, 105);
fs.writeFileSync(`./app.png`, canvas.toBuffer("image/png"));

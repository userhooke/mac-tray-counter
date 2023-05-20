const { app, Tray, nativeImage } = require("electron");
const fs = require("fs");

const max = fs.readdirSync("./icons").length;
const second = 1000;
const minute = 60000;
let timerId = null;
let counter = 0;
let tray = null;

app.whenReady().then(() => {
  tray = new Tray(getIcon(0));
  startTimer();
  tray.on("click", resetTimer);
});

function getIcon(i) {
  return nativeImage.createFromPath(`./icons/${i}.png`);
}

function startTimer() {
  timerId = setInterval(() => {
    counter++;

    if (counter <= max) {
      tray.setImage(getIcon(counter));
      return;
    }

    clearInterval(timerId);
  }, minute);
}

function resetTimer() {
  counter = 0;
  clearInterval(timerId);
  tray.setImage(getIcon(counter));
  startTimer();
}

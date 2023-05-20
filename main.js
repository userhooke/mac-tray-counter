const { app, Tray, nativeImage } = require("electron");
const fs = require("fs");
const path = require("path");

const baseFolder = path.join(__dirname, "./icons");
const max = fs.readdirSync(baseFolder).length;
const second = 1000;
const minute = 60000;
const INTERVAL = minute;

let timerId = null;
let counter = 0;
let tray = null;

app.whenReady().then(() => {
  tray = new Tray(getIcon(0));
  startTimer();
  tray.on("click", resetTimer);
});

app.on("before-quit", () => {
  clearInterval(timerId);
});

function getIcon(i) {
  return nativeImage.createFromPath(path.join(baseFolder, `${i}.png`));
}

function startTimer() {
  timerId = setInterval(() => {
    counter++;

    if (counter <= max) {
      tray.setImage(getIcon(counter));
      return;
    }

    clearInterval(timerId);
  }, INTERVAL);
}

function resetTimer() {
  counter = 0;
  clearInterval(timerId);
  tray.setImage(getIcon(counter));
  startTimer();
}

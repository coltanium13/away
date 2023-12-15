// run within folder, and node scriptA.js

// Move the mouse across the screen as a sine wave.

// robotjs has issues working on windows...

import robot from "robotjs";

const { setMouseDelay, getScreenSize, moveMouse } = robot;

(() => {
  console.clear();

  console.log("Mouse Mover is running. Press CTRL + C to exit.");

  // Speed up the mouse.

  setMouseDelay(2);

  const twoPI = Math.PI * 2.0;

  const screenSize = getScreenSize();

  const height = screenSize.height / 2 - 10;

  const width = screenSize.width;

  let x;

  while (true) {
    if (x > width / 2) {
      x = 0;
    }

    for (x = 0; x < width; x++) {
      const y = height * Math.sin((twoPI * x) / width) + height;

      moveMouse(x, y);
    }
  }
})();

# Feedback

## Goals

1. A working Game - done

   - 100% It is interesting, so many challenging features you have added and have got them to kinda work in the game.
   - It will work well but sometimes it does break.

2. Practice using Git & Github-flow - done

   - 100% 3 Branches, 29 commits

3. Apply what you are learning - done

   - SCSS, BEM , DOM & Events a lot of good stuff

## Specification

- PSEUDOCODE - done

  - I can see your thought process in your pseudocode.md. Good problem solving / breakdown.
  - I can see it helped you as the majority of the points are covered in your JS.

- Github repo & README.MD - done

  - Repo has been set up perfect
  - Readme is a good start, I would suggest adding a couple of things.
    - How do you clone it and set it up?
    - the link to the live site?
    - Add the contents from your pseudocode.md, You want to show off how you took something complex and broke it down.

- 25 Commits - done

- Use click or key press event in JS - done

- Mobile first/Responsive - not done

- No tutorials - done

- Link to the project on your portfolio - not sure.

## Overall

This is a good desktop game, lots of difficult things to check consider in breaking the game down. You have pushed yourself and even though you were warned about collision detection you have got it working most of the time ;), so kudo's for that.

The animations / styles are old school which works for the game. You can see that you have taken everything we have learned so far and put it into this project. Well everything but testing :P.

## To work on

There isn't much more to do, in my opinion these should be things to focus on if you have the time.

### Bug Fix

- You need to give your div an id of "highscore" as you are trying to get it with `const scoreText = document.getElementById("highscore");`.
  - At the moment you are not getting anything / null so when you try and set its innerHtml it errors in the console.

### House Keeping

- Your functions should be stored as variables `generateTube = () => {}` should be `const generateTube = () => {}`
- I am not a massive fan of it running on load. Can you hook it up to run on the click of a button?

### Large function

The `generateTube()` is doing to much. Remember SRP single role principle.

You want your functions to have a clearly defined task, That they can execute.

```js
// 38 - 71
generateTube = () => {
  let tubeLeft = 500;
  let randomRange = Math.random() * 60;
  let tubeBottom = randomRange;
  const tube = document.createElement("div");
  const upperTube = document.createElement("div");
  tube.classList.add("tube"); //add a class as generated in js
  upperTube.classList.add("tube");
  if (!isGameOver) {
    gameWindow.appendChild(tube);
  } //if statement prevents second last tube generating on game over
  if (!isGameOver) {
    gameWindow.appendChild(upperTube);
  }
  tube.style.left = tubeLeft + "px";
  tube.style.bottom = tubeBottom + "px";
  upperTube.style.left = tubeLeft + "px";
  upperTube.style.top = tubeBottom - spacing + "px";

  moveTube = () => {
    // function similar to that of gravity
    tubeLeft = tubeLeft - 2;
    tube.style.left = tubeLeft + "px";
    upperTube.style.left = tubeLeft + "px";

    if (tubeLeft === -60) {
      //gets rid of tube on very left good for memory storage
      clearInterval(tubeTimer);
      gameWindow.removeChild(tube);
      gameWindow.removeChild(upperTube);
    }

    if (
      (tubeLeft > 180 &&
        tubeLeft < 280 &&
        flyerLeft === 220 &&
        (flyerBottom < tubeBottom + 223 || flyerBottom > tubeBottom + spacing + 250)) ||
      flyerBottom === 76
    ) {
      //if statement halts flyer from vertical position
      gameOver();
      clearInterval(tubeTimer);
    }
  };
  let tubeTimer = setInterval(moveTube, 20);
  if (!isGameOver) {
    setInterval(generateTube, 3000);
  }
};
```

could be 

```js
const createTube = (isUpper) => {
  let tubeLeft = 500;
  let randomRange = Math.random() * 60;
  let tubeBottom = randomRange;
  const tube = document.createElement("div");
  tube.classList.add("tube");
  tube.style.left = tubeLeft + "px";
  if (isUpper) {
    tube.style.bottom = tubeBottom + "px";
  } else {
    tube.style.bottom = tubeBottom + "px";
  }
  return tube;
}

const moveTube = (tube, upperTube) => {
  let tubeLeft = 500;
    tubeLeft = tubeLeft - 2;
    tube.style.left = tubeLeft + "px";
    upperTube.style.left = tubeLeft + "px";

    if (tubeLeft === -60) {
      clearInterval(tubeTimer);
      gameWindow.removeChild(tube);
      gameWindow.removeChild(upperTube);
    }

    if (
      (tubeLeft > 180 &&
        tubeLeft < 280 &&
        flyerLeft === 220 &&
        (flyerBottom < tubeBottom + 223 || flyerBottom > tubeBottom + spacing + 250)) ||
      flyerBottom === 76
    ) {
      gameOver();
      clearInterval(tubeTimer);
    }
};

const = manageTubes = () => {
  const tube = createTube(false);
  const upperTube = createTube(true);

  if (!isGameOver) {
    gameWindow.appendChild(tube);
    gameWindow.appendChild(upperTube);
  }

  tubeTimer = setInterval(() => moveTube(tube, upperTube), 20);
}
```

The function has been broken into smaller functions to keep it simple. 

Let me know if you want me to explain any of the points from the file.

---

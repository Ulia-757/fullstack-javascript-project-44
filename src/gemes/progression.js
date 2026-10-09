import runGame from "../index.js";

const description = "What number is missing in the progression?";

const progressionLength = 10;

const generateProgression = (start, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = start + i * step;
    progression.push(currentElement);
  }

  return progression;
};

const generateRound = () => {
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = "..";

  const question = progression.join(" ");

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGame(description, generateRound);
};

export default runProgressionGame;

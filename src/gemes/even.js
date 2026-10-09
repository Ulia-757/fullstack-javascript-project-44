import runGame from "../index.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);

  const question = String(number);
  const correctAnswer = number % 2 === 0 ? "yes" : "no";

  return [question, correctAnswer];
};
const runEvenGame = () => {
  runGame(description, generateRound);
};

export default runEvenGame;

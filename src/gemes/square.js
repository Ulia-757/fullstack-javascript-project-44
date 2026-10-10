import runGame from "../index.js";

const description = 'Answer "yes" if the number is a perfect square, otherwise answer "no".';

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);

  const question = String(number);
  const correctAnswer = Number.isInteger(Math.sqrt(number)) ? "yes" : "no";

  return [question, correctAnswer];
};

const runSquareGame = () => {
  runGame(description, generateRound);
};
export default runSquareGame;

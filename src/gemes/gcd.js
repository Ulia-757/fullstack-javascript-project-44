import runGame from "../index.js";

const description = "Find the greatest common divisor of given numbers.";

const generateRound = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  const question = `${number1} ${number2}`;

  let a = number1;
  let b = number2;

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  const correctAnswer = String(a);

  return [question, correctAnswer];
};

const runGcdGame = () => {
  runGame(description, generateRound);
};

export default runGcdGame;

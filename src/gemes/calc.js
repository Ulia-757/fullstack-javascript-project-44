import runGame from "../index.js";

const description = "What is the result of the expression?";

const operator = ["+", "-", "*"];

const generateRound = (roundIndex) => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  let operatorSelection = operator[roundIndex];

  let correctAnswer;

  if (operatorSelection === "+") {
    correctAnswer = number1 + number2;
  } else if (operatorSelection === "-") {
    correctAnswer = number1 - number2;
  } else if (operatorSelection === "*") {
    correctAnswer = number1 * number2;
  }

  const question = `${number1} ${operatorSelection} ${number2}`;

  return [question, String(correctAnswer)];
};

const runCalcGame = () => {
  runGame(description, generateRound);
};

export default runCalcGame;

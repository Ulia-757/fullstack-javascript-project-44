import runGame from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2 || (number !== 2 && number % 2 === 0)) {
    return false;
  }

  for (let divisor = 3; divisor <= Math.sqrt(number); divisor += 2) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);

  const question = String(number);
  const correctAnswer = isPrime(number) ? "yes" : "no";
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame(description, generateRound);
};

export default runPrimeGame;

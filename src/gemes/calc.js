import readlineSync from "readline-sync";
import welcomeUser from "../cli.js";

const calculator = () => {
  const userName = welcomeUser();
  const operator = ["+", "-", "*"];
  console.log("What is the result of the expression?");

  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    let operatorSelection = operator[i];

    let correctAnswer;

    if (operatorSelection === "+") {
      correctAnswer = number1 + number2;
    } else if (operatorSelection === "-") {
      correctAnswer = number1 - number2;
    } else if (operatorSelection === "*") {
      correctAnswer = number1 * number2;
    }

    console.log(`Question: ${number1} ${operatorSelection} ${number2}`);

    const userResponse = readlineSync.question("Your answer: ");

    if (userResponse === String(correctAnswer)) {
      console.log("Correct!");
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calculator;

import readlineSync from "readline-sync";
import welcomeUser from "../cli.js";

const parityCheck = () => {
  const userName = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = number % 2 === 0 ? "yes" : "no";

    console.log(`Question: ${number}`);

    const userResponse = readlineSync.question("Your answer: ");

    if (userResponse === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default parityCheck;

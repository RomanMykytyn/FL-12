const ATTEMPTS = 3;
const WIN_MULTIPLIER = 2;
const NUM_INCREASE = 4;
const ONE_ATTEMPT_DIVIDE = 1;
const TWO_ATTEMPT_DIVIDE = 2;
const THREE_ATTEMPT_DIVIDE = 4;
const ATTEMPTS_DIVIDE = [ONE_ATTEMPT_DIVIDE,
                        TWO_ATTEMPT_DIVIDE,
                        THREE_ATTEMPT_DIVIDE];
const START_PRIZE = 100;
const START_NUMBERS = 8;
let isGame = true;

if (confirm('Do you want to play a game?')) {
  let totalPrize = 0;
  let basePrize = START_PRIZE;
  let maxNumbers = START_NUMBERS;
  while (isGame) {
    let spin = Math.floor(Math.random() * maxNumbers);
    console.log(spin);
    for (let i = 0; i < ATTEMPTS; i++) {
      let userResponse = +prompt(`Choose a roulette pocket number from 0 to ${maxNumbers}
Attempts left: ${ATTEMPTS - i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${basePrize / ATTEMPTS_DIVIDE[i]}$`, 0);
      if (userResponse === spin) {
        totalPrize += basePrize / ATTEMPTS_DIVIDE[i];
        if (!confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`)) {
          alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
          if (confirm('Do you want to play again?')) {
            totalPrize = 0;
            maxNumbers = START_NUMBERS;
            basePrize = START_PRIZE;
            break;
          } else {
            isGame = false;
            break;
          }
        } else {
          basePrize *= WIN_MULTIPLIER;
          maxNumbers += NUM_INCREASE;
          break;
        }
      } else if (i === ATTEMPTS - 1) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        if (confirm('Do you want to play again?')) {
          totalPrize = 0;
          maxNumbers = START_NUMBERS;
          basePrize = START_PRIZE;
        } else {
          isGame = false;
        }
      }
    }
  }
} else {
  isGame = false;
  alert('You did not become a billionaire, but can.')
}

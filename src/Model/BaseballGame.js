const {
  BaseballGameAnswerGenerator
} = require('../utils/baseballGameNumberGenerator');

class BaseballGame {
  #answer;

  setNewAnswer() {
    this.#answer = BaseballGameAnswerGenerator.generate(
      NUMBER.MIN,
      NUMBER.MAX,
      NUMBER.VALID_LENGTH
    );
  }

  getMatchedBallStrikeNumber(number) {
    let strike = 0;
    let ball = 0;
    const userInput = number.split('').map((element) => Number(element));
    userInput.forEach((element, idx) => {
      if (this.#answer[idx] === element) {
        strike += 1;
        return;
      }
      if (this.#answer.includes(element)) {
        ball += 1;
      }
    });
    return [ball, strike];
  }

  resetGame() {
    this.setNewAnswer();
  }
}

module.exports = BaseballGame;

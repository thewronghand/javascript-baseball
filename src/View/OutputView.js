const { MESSAGE, NUMBER, RESULT } = require('../utils/constants');
const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },

  printMatchResult(ball, strike) {
    if (ball === 0 && strike === 0) {
      this.printNoMatch();
      return;
    }
    if (ball !== 0 && strike === 0) {
      this.printBall(ball);
      return;
    }
    if (ball === 0 && strike !== 0) {
      this.printStrike(strike);
      return;
    }
    this.printBallStrike(ball, strike);
    if (strike === NUMBER.STRIKE_OUT) {
      this.printGameWin();
    }
  },

  printBallStrike(ball, strike) {
    MissionUtils.Console.print(
      `${ball}` + RESULT.BALL + `${strike}` + RESULT.STRIKE
    );
  },

  printBall(ball) {
    MissionUtils.Console.print(`${ball}` + RESULT.BALL);
  },

  printStrike(strike) {
    MissionUtils.Console.print(`${strike}` + RESULT.STRIKE);
  },

  printGameWin() {
    MissionUtils.Console.print(MESSAGE.GAME_FINISH);
  },

  printNoMatch() {
    MissionUtils.Console.print(RESULT.NO_MATCH);
  },

  printError(error) {
    MissionUtils.Console.print(error);
  }
};

module.exports = OutputView;

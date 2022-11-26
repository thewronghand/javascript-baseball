const { MESSAGE, NUMBER, RESULT } = require('../utils/constants');
const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },

  printMatchResult(matchResult) {
    const [ball, strike] = matchResult;
    if (strike === NUMBER.STRIKE_OUT) {
      this.printGameWin(matchResult);
      return;
    }
    if (ball === 0 && strike === 0) {
      this.printNoMatch();
      return;
    }
    const resultText = this.getResultString(matchResult);
    MissionUtils.Console.print(resultText);
  },

  getResultString(result) {
    const text = [RESULT.BALL, RESULT.STRIKE];
    const parsedResult = result.map((element, idx) => {
      if (element === 0) {
        return;
      }
      return String(element) + text[idx];
    });
    return parsedResult.filter((result) => result).join(' ');
  },

  printGameWin(matchResult) {
    const strikeText = this.getResultString(matchResult);
    MissionUtils.Console.print(`${strikeText}` + `\n` + MESSAGE.GAME_FINISH);
  },

  printNoMatch() {
    MissionUtils.Console.print(RESULT.NO_MATCH);
  },

  printError(error) {
    MissionUtils.Console.print(error);
  }
};

module.exports = OutputView;

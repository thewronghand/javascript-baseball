const { MESSAGE, NUMBER, RESULT } = require('../utils/constants');
const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    MissionUtils.Console.print(MESSAGE.gameStart);
  },

  printMatchResult(matchResult) {
    const [ball, strike] = matchResult;
    if (strike === NUMBER.strikeOutCount) {
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
    const text = [RESULT.ball, RESULT.strike];
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
    MissionUtils.Console.print(`${strikeText}` + `\n` + MESSAGE.gameFinish);
  },

  printNoMatch() {
    MissionUtils.Console.print(RESULT.noMatch);
  }
};

module.exports = OutputView;

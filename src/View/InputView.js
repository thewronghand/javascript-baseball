const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readUserInputNumbers(callback) {
    MissionUtils.Console.readLine(MESSAGE.readUserInputNumbers, (input) => {
      callback(input);
    });
  },

  readUserInputCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.readUserInputCommand, (input) => {
      callback(input);
    });
  }
};

module.exports = InputView;

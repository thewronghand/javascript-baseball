const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readUserInputNumbers(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_NUMBER, (input) => {
      callback(input);
    });
  },

  readUserInputCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_COMMAND, (input) => {
      callback(input);
    });
  }
};

module.exports = InputView;

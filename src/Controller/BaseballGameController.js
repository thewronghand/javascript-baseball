const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BaseballGame = require('../Model/BaseballGame');
const Validate = require('../utils/validation');
const { NUMBER, KEY, ERROR } = require('../utils/constants');
const MissionUtils = require('@woowacourse/mission-utils');

class BaseballGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    const baseballGame = new BaseballGame();
    baseballGame.setNewAnswer();
    this.#outputView.printStart();
    this.#readNumbers(baseballGame);
  }

  #readNumbers(game) {
    this.#inputView.readUserInputNumbers((input) => {
      this.#handleUserInputNumbersException(input, game);
    });
  }

  #readCommand(game) {
    this.#inputView.readUserInputCommand((input) => {
      this.#handleUserInputCommandException(input, game);
    });
  }

  #handleUserInputNumbersException(input, game) {
    Validate.inputNumbers(input);
    const matchResult = game.getMatchedBallStrikeNumber(input);
    const [ball, strike] = matchResult;
    this.#outputView.printMatchResult(matchResult);
    if (strike === NUMBER.STRIKE_OUT) {
      this.#readCommand(game);
      return;
    }
    this.#readNumbers(game);
  }

  #handleUserInputCommandException(input, game) {
    Validate.inputCommand(input);
    if (input === KEY.RESTART) {
      game.setNewAnswer();
      this.#readNumbers(game);
      return;
    }
    MissionUtils.Console.close();
  }
}

module.exports = BaseballGameController;

const { NUMBER, KEY, ERROR } = require('./constants');

const Validate = {
  inputNumbers(numbers) {
    if (numbers.length !== NUMBER.VALID_LENGTH) {
      throw new Error(ERROR.USER_INPUT_NUMBERS_INVALID);
    }
    if (!isValidInteger(numbers) || hasDuplicateNumber(numbers)) {
      throw new Error(ERROR.USER_INPUT_NUMBERS_INVALID);
    }
  },

  inputCommand(command) {
    if (!isValidCommand(command)) {
      throw new Error(ERROR.USER_INPUT_COMMAND_INVALID);
    }
  }
};

module.exports = Validate;

const isValidInteger = (input) => {
  if (parseFloat(input) !== parseInt(input)) {
    return false;
  }
  if (parseInt(input) < NUMBER.MIN) {
    return false;
  }
  return true;
};

const hasDuplicateNumber = (input) => input.length !== new Set(input).size;

const isValidCommand = (input) => {
  if (input !== KEY.RESTART && input !== KEY.QUIT) {
    return false;
  }
  return true;
};

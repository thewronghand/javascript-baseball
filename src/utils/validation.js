const { NUMBER, KEY, ERROR } = require('./constants');

const Validate = {
  inputNumbers(numbers) {
    if (numbers.length !== NUMBER.validLength) {
      throw new Error(ERROR.userInputNumbersInvalid);
    }
    if (!isValidInteger(numbers) || hasDuplicateNumber(numbers)) {
      throw new Error(ERROR.userInputNumbersInvalid);
    }
  },

  inputCommand(command) {
    if (!isValidCommand(command)) {
      throw new Error(ERROR.userInputCommandInvalid);
    }
  }
};

module.exports = Validate;

const isValidInteger = (input) => {
  if (parseFloat(input) !== parseInt(input)) {
    return false;
  }
  if (parseInt(input) < NUMBER.min) {
    return false;
  }
  return true;
};

const hasDuplicateNumber = (input) => input.length !== new Set(input).size;

const isValidCommand = (input) => {
  if (input !== KEY.restart && input !== KEY.quit) {
    return false;
  }
  return true;
};

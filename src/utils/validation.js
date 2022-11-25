const { NUMBER, KEY } = require('./constants');

const Validate = {
  inputNumbers(numbers) {
    if (numbers.length !== NUMBER.VALID_LENGTH) {
      throw new Error();
    }
    if (!isValidInteger(numbers) || hasDuplicateNumber(numbers)) {
      throw new Error();
    }
  },

  inputCommand(command) {
    if (!isValidCommand(command)) {
      throw new Error();
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

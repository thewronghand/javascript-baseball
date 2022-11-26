const NUMBER = {
  min: 1,
  max: 9,
  validLength: 3,
  strikeOutCount: 3
};

const RESULT = {
  ball: '볼',
  strike: '스트라이크',
  noMatch: '낫싱'
};

const KEY = {
  restart: '1',
  quit: '2'
};

const MESSAGE = {
  gameStart: '숫자 야구 게임을 시작합니다.',
  gameFinish: `${NUMBER.validLength}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  readUserInputNumbers: '숫자를 입력해주세요 : ',
  readUserInputCommand: `게임을 새로 시작하려면 ${KEY.restart}, 종료하려면 ${KEY.quit}를 입력하세요.\n`
};

const ERROR = {
  userInputNumbersInvalid: `[ERROR] 입력 숫자는 ${NUMBER.min}~${NUMBER.max} 사이의 중복되지 않는 ${NUMBER.validLength}개의 숫자여야 합니다.`,
  userInputCommandInvalid: `[ERROR] 명령어는 ${KEY.restart}이나 ${KEY.quit}만 입력할 수 있습니다.`
};

module.exports = { NUMBER, MESSAGE, RESULT, KEY, ERROR };

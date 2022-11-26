const NUMBER = {
  min: 1,
  max: 9,
  validLength: 3,
  strikeOutCount: 3
};

const MESSAGE = {
  gameStart: '숫자 야구 게임을 시작합니다.',
  gameFinish: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  readUserInputNumbers: '숫자를 입력해주세요 : ',
  readUserInputCommand: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
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

const ERROR = {
  userInputNumbersInvalid:
    '[ERROR] 입력 숫자는 1~9 사이의 중복되지 않는 세 개의 숫자여야 합니다.',
  userInputCommandInvalid: '[ERROR] 명령어는 1이나 2만 입력할 수 있습니다.'
};

module.exports = { NUMBER, MESSAGE, RESULT, KEY, ERROR };

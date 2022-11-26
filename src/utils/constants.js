const NUMBER = {
  MIN: 1,
  MAX: 9,
  VALID_LENGTH: 3,
  STRIKE_OUT: 3
};

const MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_FINISH: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  READ_USER_INPUT_NUMBER: '숫자를 입력해주세요 : ',
  READ_USER_INPUT_COMMAND: `게임을 새로 시작하려면 ${KEY.RESTART}, 종료하려면 ${KEY.QUIT}를 입력하세요.\n`
};

const RESULT = {
  BALL: '볼 ',
  STRIKE: '스트라이크',
  NO_MATCH: '낫싱'
};

const KEY = {
  RESTART: '1',
  QUIT: '2'
};

const ERROR = {
  USER_INPUT_NUMBERS_INVALID: `[ERROR] 입력 숫자는 ${NUMBER.MIN}~${NUMBER.MAX} 사이의 중복되지 않는 ${NUMBER.VALID_LENGTH} 개의 숫자여야 합니다.`,
  USER_INPUT_COMMAND_INVALID: `[ERROR] 명령어는 ${KEY.RESTART} 혹은 ${KEY.QUIT}만 입력할 수 있습니다.`
};

module.exports = { NUMBER, MESSAGE, RESULT, KEY, ERROR };

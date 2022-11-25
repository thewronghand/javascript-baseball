const NUMBER = {
  MIN: 1,
  MAX: 9,
  VALID_LENGTH: 3
};

const MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_FINISH: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  READ_USER_INPUT_NUMBER: '숫자를 입력해주세요 : ',
  READ_USER_INPUT_COMMAND:
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
};

const RESULT = {
  BALL: '볼 ',
  STRIKE: '스트라이크'
};

module.exports = { NUMBER, MESSAGE, RESULT };

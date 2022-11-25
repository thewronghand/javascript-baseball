const MissionUtils = require('@woowacourse/mission-utils');

const BaseballGameAnswerGenerator = {
  generate(min, max, length) {
    const answer = [];
    for (let count = 0; count < length; count += 1) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(min, max);
      if (!answer.includes(randomNumber)) {
        answer.push(randomNumber);
      }
    }
    return answer;
  }
};

module.exports = { BaseballGameAnswerGenerator };

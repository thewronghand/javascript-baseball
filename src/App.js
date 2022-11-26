const BaseballGameController = require('./Controller/BaseballGameController');

class App {
  play() {
    new BaseballGameController();
  }
}

module.exports = App;

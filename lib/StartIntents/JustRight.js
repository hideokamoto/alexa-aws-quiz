const states = require('../states')
module.exports = function (callback) {
  this.handler.state = states.STARTMODE
  this.attributes['quizAmount'] += 1
  this.attributes['correctAnswerAmount'] += 1
  callback()
}

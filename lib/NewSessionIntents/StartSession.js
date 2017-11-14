const states = require('../states')
module.exports = function () {
  if (Object.keys(this.attributes).length === 0) {
    this.attributes['quizAmount'] = 0
    this.attributes['correctAnswerAmount'] = 0
    this.attributes['correctNumber'] = 0
    this.attributes['correctService'] = ''
  }
  this.handler.state = states.STARTMODE
  this.emit(':ask',
    'Welcome to AWS quiz game. Would you like to play?',
    'Say yes to start the game or no to quit.'
  )
}

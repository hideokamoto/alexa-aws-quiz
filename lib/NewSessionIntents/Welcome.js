const states = require('../states')
module.exports = function () {
  if (Object.keys(this.attributes).length === 0) {
    this.attributes['quizAmount'] = 0
    this.attributes['correctAnswerAmount'] = 0
    this.attributes['correctNumber'] = 0
    this.attributes['correctService'] = ''
  }
  this.handler.state = states.STARTMODE
  this.emit(
    ':ask',
    this.t('WELCOME') + this.t('WITCH_GAME'),
    this.t('START_REPROMPT') + this.t('WITCH_GAME')
  )
}

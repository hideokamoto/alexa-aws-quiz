const getLocaleFromEvent = require('../utils/getLocale')

module.exports = function () {
  const locale = getLocaleFromEvent(this.event)
  const guessNum = parseInt(this.event.request.intent.slots.number.value)
  const correctNumber = this.attributes['correctNumber']
  if (guessNum === correctNumber) {
    this.emit('JustRight', () => {
      let say = ''
      switch (locale) {
        case 'ja-JP':
          say += '正解です。'
          break
        default:
          say += guessNum.toString() + 'is correct! '
          break
      }
      say += this.t('ASK_NEXT')
      this.emit(':ask', say,
        this.t('ASK_NEXT_REPROMPT'))
    })
  }
  const correct = this.attributes['correctService']
  this.emit('Wrong', () => {
    let say = ''
    switch (locale) {
      case 'ja-JP':
        say += guessNum.toString() + 'ではありません。'
        break
      default:
        say += guessNum.toString() + 'is not correct. '
        break
    }
    say += this.t('THE_SERVICE_IS') + correct + '. ' + this.t('ASK_NEXT')
    this.emit(':ask', say,
      this.t('ASK_NEXT_REPROMPT'))
  })
}

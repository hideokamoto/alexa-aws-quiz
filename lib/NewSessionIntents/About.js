module.exports = function () {
  const message = this.t('ABOUT') + this.t('WOULD_YOU_LIKE_TO_PLAY')
  this.emit(':ask', message, message)
}

module.exports = function () {
  const message = this.t('ABOUT') + this.t('WITCH_GAME')
  this.emit(':ask', message, message)
}

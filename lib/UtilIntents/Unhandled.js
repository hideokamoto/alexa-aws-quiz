module.exports = function () {
  var message = this.t('UNHANDLED') + this.t('WITCH_GAME')
  this.emit(':ask', message, message)
}

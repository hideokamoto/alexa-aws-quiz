module.exports = function () {
  var message = this.t('UNHANDLED')
  this.emit(':ask', message, message)
}

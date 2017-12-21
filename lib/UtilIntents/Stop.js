module.exports = function () {
  const message = this.t('SEE_YOU')
  this.emit(':tell', message)
}

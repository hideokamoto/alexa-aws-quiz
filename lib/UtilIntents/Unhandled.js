module.exports = function () {
  var message = 'Say yes to continue, or no to end the game.'
  this.emit(':ask', message, message)
}

module.exports = function () {
  const message = 'This is a quiz game learning about AWS serivices. Would you like to play?'
  this.emit(':ask', message, message)
}

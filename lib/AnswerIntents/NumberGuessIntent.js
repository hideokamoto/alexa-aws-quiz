module.exports = function () {
  const guessNum = parseInt(this.event.request.intent.slots.number.value)
  const correctNumber = this.attributes['correctNumber']
  if (guessNum === correctNumber) {
    this.emit('JustRight', () => {
      this.emit(':ask', guessNum.toString() + 'is correct! Would you like to play a next question?',
        'Say yes to start a new question, or no to end the game.')
    })
  }
  const correct = this.attributes['correctService']
  this.emit('Wrong', () => {
    this.emit(':ask', guessNum.toString() + 'is not correct. The serivice is' + correct + '.Would you like to play a next question?',
      'Say yes to start a new question, or no to end the game.')
  })
}

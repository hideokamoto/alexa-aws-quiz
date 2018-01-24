module.exports = function () {
  const { gameType } = this.attributes
  switch (gameType) {
    case 'quiz':
      this.emit('Quiz')
      break
    case 'karuta':
      this.emit('Karuta')
      break
    default:
      this.emit('Quiz')
      break
  }
}

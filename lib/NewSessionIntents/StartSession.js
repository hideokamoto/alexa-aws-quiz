module.exports = function () {
  const { request } = this.event
  const intent = request.intent || {}
  const name = intent.name || ''
  switch (name) {
    case 'LaunchQuizIntent':
      this.emit('LaunchQuizIntent')
      break
    case 'LaunchKarutaIntent':
      this.emit('LaunchKarutaIntent')
      break
    case 'AboutIntent':
      this.emit('AboutIntent')
      break
    default:
      this.emit('Welcome')
      break
  }
}

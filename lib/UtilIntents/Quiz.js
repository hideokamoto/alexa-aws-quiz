const states = require('../states')

function getQuestions (locale = 'en-US') {
  switch (locale) {
    case 'ja-JP':
      return require('../translates/ja/services')
    default:
      return require('../translates/en/services')
  }
}

function getServiceNames (locale) {
  const services = getQuestions(locale)
  const serviceNames = Object.keys(services)
  return serviceNames
}

function getLocaleFromEvent (event) {
  let lang = 'en-US'
  const { request } = event
  if (!request) return lang
  const { locale } = request
  if (!locale) return lang
  return locale
}

module.exports = function () {
  const locale = getLocaleFromEvent(this.event)
  const services = getQuestions(locale)
  const serviceNames = getServiceNames(locale)
  this.handler.state = states.ANSWERMODE
  const correctNumber = 2
  const quizNum = Math.floor(Math.random() * serviceNames.length)
  const answer = serviceNames[quizNum]
  const description = services[answer].description
  serviceNames.splice(quizNum, 1)
  const wrongNum1 = Math.floor(Math.random() * serviceNames.length)
  const wrong1 = serviceNames[wrongNum1]
  serviceNames.splice(wrongNum1, 1)
  const wrong2 = serviceNames[Math.floor(Math.random() * serviceNames.length)]
  const selection = [
    `Number1 : ${wrong1}. `,
    `Number2 : ${answer}. `,
    `Number3 : ${wrong2}. `
  ].join('')
  this.attributes['correctNumber'] = correctNumber
  this.attributes['correctService'] = answer
  const say = 'Question. ' + description + '. What is the service name? ' + selection
  this.emit(':ask', say, 'Try saying a number.')
}

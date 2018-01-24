const states = require('../states')
const getLocaleFromEvent = require('../utils/getLocale')
const { getQuestions, getServiceNames } = require('../utils/quiz')

module.exports = function () {
  this.attributes['gameType'] = 'quiz'
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
    this.t('NUMBER') + `1 : ${wrong1}. `,
    this.t('NUMBER') + `2 : ${answer}. `,
    this.t('NUMBER') + `3 : ${wrong2}. `
  ].join('')
  this.attributes['correctNumber'] = correctNumber
  this.attributes['correctService'] = answer
  const say =
    this.t('QUESTION') +
    `${description}` +
    this.t('WHAT_IS_SERVIECE_NAME') +
    selection
  this.emit(':ask', say, this.t('TRY_SAY_NUMBER'))
}

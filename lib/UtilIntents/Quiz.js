const states = require('../states')
const getLocaleFromEvent = require('../utils/getLocale')
const { getQuestions, getServiceNames, makeQuiz } = require('../utils/quiz')

module.exports = function () {
  this.attributes['gameType'] = 'quiz'
  this.handler.state = states.ANSWERMODE
  const locale = getLocaleFromEvent(this.event)
  const services = getQuestions(locale)
  const serviceNames = getServiceNames(locale)

  const answerNumber = Math.floor(Math.random() * 3) + 1
  const { selection, correctServiceName, quizDescription } = makeQuiz(
    answerNumber,
    serviceNames,
    services
  )
  let selectionText = ''
  selection.map((name, key) => {
    selectionText += this.t('NUMBER') + ` ${key + 1} : ${name}.`
  })

  this.attributes['correctNumber'] = answerNumber
  this.attributes['correctService'] = correctServiceName
  const say =
    this.t('QUESTION') +
    `${quizDescription}` +
    this.t('WHAT_IS_SERVIECE_NAME') +
    selectionText
  this.emit(':ask', say, this.t('TRY_SAY_NUMBER'))
}

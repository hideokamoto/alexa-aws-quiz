const Speech = require('ssml-builder')
const getLocaleFromEvent = require('../utils/getLocale')
const { getQuestions, getServiceNames } = require('../utils/quiz')
module.exports = function () {
  const locale = getLocaleFromEvent(this.event)
  const services = getQuestions(locale)
  const serviceNames = getServiceNames(locale)
  const quizNum = Math.floor(Math.random() * serviceNames.length)
  const answer = serviceNames[quizNum]
  const description = services[answer].description

  // make ssml
  const speech = new Speech()
  speech.paragraph(this.t('START_KARUTA_MODE'))
  speech.paragraph(description)
  speech.paragraph(this.t('WHAT_IS_SERVIECE_NAME'))
  speech.pause('5s')
  speech.paragraph(this.t('THE_SERVICE_IS') + answer)
  speech.paragraph(this.t('ASK_NEXT'))
  const speechOutput = speech.ssml(true)
  this.emit(':ask', speechOutput, this.t('ASK_NEXT'))
}

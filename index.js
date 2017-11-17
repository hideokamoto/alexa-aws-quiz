const Alexa = require('alexa-sdk')
const newSessionHandlers = require('./lib/NewSessionHandlers')
const startSessionHandlers = require('./lib/StartHandlers')
const answerHandlers = require('./lib/AnswerHandlers')
const languageStrings = require('./lib/translates/languageStrings')

module.exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context)
  alexa.resources = languageStrings
  alexa.registerHandlers(newSessionHandlers, startSessionHandlers, answerHandlers)
  alexa.execute()
}

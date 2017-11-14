const Alexa = require('alexa-sdk')
const newSessionHandlers = require('./lib/NewSessionHandlers')
const startSessionHandlers = require('./lib/StartHandlers')
const answerHandlers = require('./lib/AnswerHandlers')

module.exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context)
  alexa.registerHandlers(newSessionHandlers, startSessionHandlers, answerHandlers)
  alexa.execute()
}

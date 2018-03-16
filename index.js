const Alexa = require('alexa-sdk')
const newSessionHandlers = require('./lib/NewSessionHandlers')
const startSessionHandlers = require('./lib/StartHandlers')
const answerHandlers = require('./lib/AnswerHandlers')
const languageStrings = require('./lib/translates/languageStrings')

module.exports.handler = function (event, context, callback) {
  console.log(event)
  const alexa = Alexa.handler(event, context)
  alexa.appId = 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022'
  alexa.resources = languageStrings
  alexa.registerHandlers(
    newSessionHandlers,
    startSessionHandlers,
    answerHandlers
  )
  alexa.execute()
}

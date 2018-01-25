const Alexa = require('alexa-sdk')
const states = require('./states')

module.exports = Alexa.CreateStateHandler(states.ANSWERMODE, {
  NewSession: require('./NewSessionIntents/NewSession'),
  Unhandled: require('./AnswerIntents/Unhandled'),
  'AMAZON.HelpIntent': require('./UtilIntents/Help'),
  'AMAZON.StopIntent': require('./UtilIntents/Stop'),
  SessionEndedRequest: require('./UtilIntents/Stop'),
  'AMAZON.CancelIntent': require('./UtilIntents/Stop'),
  NumberGuessIntent: require('./AnswerIntents/NumberGuessIntent')
})

const Alexa = require('alexa-sdk')
const states = require('./states')

module.exports = Alexa.CreateStateHandler(states.STARTMODE, {
  NewSession: require('./NewSessionIntents/NewSession'),
  Unhandled: require('./UtilIntents/Unhandled'),
  'AMAZON.HelpIntent': require('./UtilIntents/Help'),
  'AMAZON.NoIntent': require('./StartIntents/NoIntent'),
  'AMAZON.YesIntent': require('./StartIntents/YesIntent'),
  'AMAZON.StopIntent': require('./UtilIntents/Stop'),
  'AMAZON.CancelIntent': require('./UtilIntents/Stop'),
  SessionEndedRequest: require('./UtilIntents/Stop'),
  LaunchQuizIntent: require('./NewSessionIntents/LaunchQuiz'),
  LaunchKarutaIntent: require('./NewSessionIntents/LaunchKaruta'),
  AboutIntent: require('./NewSessionIntents/About')
})

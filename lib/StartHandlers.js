const Alexa = require('alexa-sdk')
const states = require('./states')

module.exports = Alexa.CreateStateHandler(states.STARTMODE, {
  NewSession: require('./NewSessionIntents/NewSession'),
  Unhandled: require('./UtilIntents/Unhandled'),
  'AMAZON.HelpIntent': require('./UtilIntents/Help'),
  'AMAZON.NoIntent': require('./StartIntents/NoIntent')
})

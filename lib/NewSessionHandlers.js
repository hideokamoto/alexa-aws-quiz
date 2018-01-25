module.exports = {
  NewSession: require('./NewSessionIntents/StartSession'),
  Welcome: require('./NewSessionIntents/Welcome'),
  JustRight: require('./StartIntents/JustRight'),
  Wrong: require('./StartIntents/Wrong'),
  LaunchQuizIntent: require('./NewSessionIntents/LaunchQuiz'),
  LaunchKarutaIntent: require('./NewSessionIntents/LaunchKaruta'),
  Quiz: require('./UtilIntents/Quiz'),
  Karuta: require('./StartIntents/Karuta'),
  'AMAZON.StopIntent': require('./UtilIntents/Stop'),
  'AMAZON.CancelIntent': require('./UtilIntents/Stop'),
  SessionEndedRequest: require('./UtilIntents/Stop'),
  AboutIntent: require('./NewSessionIntents/About')
}

module.exports = {
  NewSession: require('./NewSessionIntents/StartSession'),
  Welcome: require('./NewSessionIntents/Welcome'),
  JustRight: require('./StartIntents/JustRight'),
  Wrong: require('./StartIntents/Wrong'),
  LaunchQuizIntent: require('./NewSessionIntents/LaunchQuiz'),
  LaunchKarutaIntent: require('./NewSessionIntents/LaunchKaruta'),
  Quiz: require('./UtilIntents/Quiz'),
  AboutIntent: require('./NewSessionIntents/About')
}

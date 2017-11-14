const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.name = 'Use successd 1 question and exit'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('Welcome to AWS quiz game. Would you like to play?')
  .userSays('AMAZON.YesIntent')
  .plainResponse
  .shouldContain('Quiz1')
  .shouldContain('It is a fully managed')
  .shouldContain('Amazon WorkSpaces')
  .userSays('NumberGuessIntent', {number: '2'})
  .plainResponse
  .shouldContain('is correct')
  .userSays('AMAZON.NoIntent')
  .plainResponse
  .shouldContain('Ok, see you next time!')
  .end()

opts.name = 'Use wrong 1 question and exit'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('Welcome to AWS quiz game. Would you like to play?')
  .userSays('AMAZON.YesIntent')
  .plainResponse
  .shouldContain('Quiz1')
  .shouldContain('It is a fully managed')
  .shouldContain('Amazon WorkSpaces')
  .userSays('NumberGuessIntent', {number: '3'})
  .plainResponse
  .shouldContain('is not correct')
  .userSays('AMAZON.NoIntent')
  .plainResponse
  .shouldContain('Ok, see you next time!')
  .end()

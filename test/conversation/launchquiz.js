const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.name = 'Use direct start quiz and successd 1 question and exit'
conversation(opts)
  .userSays('LaunchQuizIntent')
  .plainResponse
  .shouldContain('Question.')
  .shouldContain('What is the service name?')
  .userSays('NumberGuessIntent', {number: '2'})
  .plainResponse
  .shouldContain('is correct')
  .userSays('AMAZON.NoIntent')
  .plainResponse
  .shouldContain('Ok, see you next time!')
  .end()

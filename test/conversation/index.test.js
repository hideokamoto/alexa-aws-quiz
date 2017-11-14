const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.name = 'Use help and exit'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('Welcome to AWS quiz game. Would you like to play?')
  .userSays('AMAZON.HelpIntent')
  .plainResponse
  .shouldContain('This is a quiz game learning about AWS serivices.')
  .shouldContain('Would you like to play?')
  .userSays('AMAZON.NoIntent')
  .plainResponse
  .shouldContain('Ok, see you next time!')
  .end()

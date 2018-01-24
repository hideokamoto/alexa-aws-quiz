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
  .plainResponse.shouldContain('Welcome to cloud quiz game.')
  .shouldContain('Quiz mode, or Karuta mode. Which game do you want to joy?')
  .userSays('AMAZON.HelpIntent')
  .plainResponse.shouldContain(
    'This is a quiz game learning about cloud serivices.'
  )
  .shouldContain('Which game do you want to joy?')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('Ok, see you next time!')
  .end()

opts.name = 'Use ask about'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('Welcome to cloud quiz game.')
  .shouldContain('Quiz mode, or Karuta mode. Which game do you want to joy?')
  .userSays('AboutIntent')
  .plainResponse.shouldContain(
    'This is a quiz game learning about cloud serivices.'
  )
  .shouldContain('Which game do you want to joy?')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('Ok, see you next time!')
  .end()

/*
opts.name = 'Ask about directly'
conversation(opts)
  .userSays('AboutIntent')
  .plainResponse
  .shouldContain('This is a quiz game learning about cloud serivices.')
  .shouldContain('Which game do you want to joy?')
  .userSays('AMAZON.NoIntent')
  .plainResponse
  .shouldContain('Ok, see you next time!')
  .end()
*/

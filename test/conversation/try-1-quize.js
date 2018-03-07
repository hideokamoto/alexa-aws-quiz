const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  appId: 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022',
  app: app,
  handler: app.handler
}

opts.name = 'Use successd 1 question and exit'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('Welcome to cloud quiz game.')
  .shouldContain('Quiz mode, or Karuta mode. Which game do you want to joy?')
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('Question')
  .shouldContain('What is the service name?')
  .userSays('NumberGuessIntent', { number: '2' })
  .plainResponse.shouldContain('Would you like to play a next question?')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('Ok, see you next time!')
  .end()

opts.name = 'Use wrong 1 question and exit'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('Welcome to cloud quiz game.')
  .shouldContain('Quiz mode, or Karuta mode. Which game do you want to joy?')
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('Question')
  .shouldContain('What is the service name?')
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('Would you like to play a next question?')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('Ok, see you next time!')
  .end()

opts.locale = 'ja-JP'
opts.name = 'Use wrong 1 question and exit in Japanese'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain(
    'クラウドクイズゲームへようこそ。クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('問題。')
  .shouldContain('このサービスは次のうちどれでしょう？')
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

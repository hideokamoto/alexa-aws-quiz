const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.name = 'User direct start quiz and successd 1 question and exit'
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

opts.name = 'User starts quiz and successd 1 question and exit'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('Welcome to cloud quiz game.Would you like to play?')
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

opts.locale = 'ja-JP'
opts.name = 'Use wrong 1 question and exit in Japanese'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('クラウドクイズゲームへようこそ。ゲームを始めますか？')
  .userSays('LaunchQuizIntent')
  .plainResponse
  .shouldContain('問題。')
  .shouldContain('このサービスは次のうちどれでしょう？')
  .userSays('NumberGuessIntent', {number: '3'})
  .plainResponse
  .shouldContain('ではありません')
  .userSays('AMAZON.NoIntent')
  .plainResponse
  .shouldContain('またのご利用をお待ちしております。')
  .end()

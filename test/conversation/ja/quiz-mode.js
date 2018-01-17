const conversation = require('alexa-conversation')
const app = require('../../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.locale = 'ja-JP'
opts.name = 'Ask quiz type and start karuta game'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchQuizIntent')
  .plainResponse.shouldContain('問題。')
  .shouldContain('このサービスは次のうちどれでしょう？')
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('ではありません')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

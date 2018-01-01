const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.locale = 'ja-JP'
opts.name = 'Use wrong 1 question and exit in Japanese'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain(
    'クラウドクイズゲームへようこそ。ゲームを始めますか？'
  )
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('問題。')
  .shouldContain('このサービスは次のうちどれでしょう？')
  .userSays('Unhandled')
  .plainResponse.shouldContain('すみません。よく聞き取れませんでした。')
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('ではありません')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

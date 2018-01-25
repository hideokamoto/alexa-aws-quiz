const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  appId: 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022',
  app: app,
  handler: app.handler
}

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
  .userSays('Unhandled')
  .plainResponse.shouldContain('すみません。よく聞き取れませんでした。')
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('ではありません')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

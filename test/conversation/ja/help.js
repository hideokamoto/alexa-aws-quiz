const conversation = require('alexa-conversation')
const app = require('../../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.locale = 'ja-JP'
opts.name = 'Ask help intent and select quiz mode.'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .shouldContain('クイズモードとカルタモード。どちらのモードで遊びますか？')
  .userSays('AMAZON.HelpIntent')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchQuizIntent')
  .plainResponse.shouldContain('問題。')
  .end()

opts.name = 'Ask help intent and select karuta mode.'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .shouldContain('クイズモードとカルタモード。どちらのモードで遊びますか？')
  .userSays('AMAZON.HelpIntent')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタ')
  .end()

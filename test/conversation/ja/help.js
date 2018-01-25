const conversation = require('alexa-conversation')
const app = require('../../../index.js')

const opts = {
  appId: 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022',
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

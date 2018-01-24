const conversation = require('alexa-conversation')
const app = require('../../../index.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

opts.locale = 'ja-JP'
opts.name = 'Ask quiz type and start quiz game'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタゲームを始めます。')
  .end()

opts.name = 'Launch karuta game by one shot request'
conversation(opts)
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタゲームを始めます。')
  .end()

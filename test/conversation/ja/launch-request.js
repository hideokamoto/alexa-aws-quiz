const conversation = require('alexa-conversation')
const app = require('../../../index.js')

const opts = {
  appId: 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022',
  app: app,
  handler: app.handler
}

opts.locale = 'ja-JP'
opts.name = 'Launch skill and stop session by SessionEndedRequest'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('SessionEndedRequest')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Launch skill and stop session by NoIntent'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Launch skill and stop session by StopIntent'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('AMAZON.StopIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Launch skill and stop session by CancelIntent'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('AMAZON.CancelIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

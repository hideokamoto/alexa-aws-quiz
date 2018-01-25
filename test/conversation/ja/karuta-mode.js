const conversation = require('alexa-conversation')
const app = require('../../../index.js')

const opts = {
  appId: 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022',
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

opts.name = 'Play karuta game at onece'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタゲームを始めます。')
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Play karuta game twice'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタゲームを始めます。')
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('問題。')
  .end()

opts.name = 'Play karuta game and stop skill'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタゲームを始めます。')
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.StopIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Play karuta game and cancel skill'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタゲームを始めます。')
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.CancelIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Play karuta game and stop session by SessionEndedRequest'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain('クラウドクイズゲームへようこそ。')
  .plainResponse.shouldContain(
    'クイズモードとカルタモード。どちらのモードで遊びますか？'
  )
  .userSays('LaunchKarutaIntent')
  .plainResponse.shouldContain('カルタゲームを始めます。')
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('SessionEndedRequest')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

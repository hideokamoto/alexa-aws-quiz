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
  .userSays('LaunchQuizIntent')
  .plainResponse.shouldContain('問題。')
  .shouldContain('このサービスは次のうちどれでしょう？')
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('ではありません')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Play quiz game twice.'
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
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('問題。')
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('ではありません')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Play quiz game once and answer is unhandled.'
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
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('問題。')
  .userSays('AMAZON.StopIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

opts.name = 'Play quiz game once and answer is unhandled.'
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
  .shouldContain('次の問題に挑戦しますか？')
  .userSays('AMAZON.YesIntent')
  .plainResponse.shouldContain('問題。')
  .userSays('Unhandled')
  .plainResponse.shouldContain(
    'すみません。よく聞き取れませんでした。もう一度答えを言ってください。'
  )
  .userSays('NumberGuessIntent', { number: '3' })
  .plainResponse.shouldContain('ではありません')
  .userSays('AMAZON.NoIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております。')
  .end()

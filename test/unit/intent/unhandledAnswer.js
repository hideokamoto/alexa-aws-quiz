/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction,
  fail
} = helpers
describe('Unhandled', () => {
  beforeEach(() => {
    event.request.type = 'Unhandled'
    event.session.new = false
    event.session.attributes = {
      quizAmount: 0,
      correctAnswerAmount: 0,
      correctNumber: 2,
      correctService: 'Amazon Kinesis',
      STATE: '_ANSWERMODE'
    }
  })
  it('should ask valid answer [Japanese]', () => {
    event.request.locale = 'ja-JP'
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech,
        shouldEndSession
      } = response
      assert.equal(outputSpeech.ssml, '<speak> すみません。よく聞き取れませんでした。もう一度答えを言ってください。 </speak>')
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(shouldEndSession, false)
    }
    executeFunction(event, {succeed, fail}, handler)
  })
  it('should ask valid answer [Japanese]', () => {
    event.request.type = 'NumberGuessIntent'
    event.request.locale = 'ja-JP'
    event.request.intent = {
      slots: {
        number: {
          value: 3
        }
      }
    }
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech,
        shouldEndSession
      } = response
      assert.deepEqual(outputSpeech.ssml, '<speak> 3ではありません。このサービスの名前は、Amazon Kinesisです。次の問題に挑戦しますか？ </speak>')
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(shouldEndSession, false)
    }
    executeFunction(event, {succeed, fail}, handler)
  })
})

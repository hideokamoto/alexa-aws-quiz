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

describe('StopIntent', () => {
  beforeEach(() => {
    event.request.type = 'AMAZON.StopIntent'
    event.session.new = false
  })
  it('should end the session [English]', () => {
    event.request.locale = 'en-US'
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech,
        shouldEndSession
      } = response
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(outputSpeech.ssml, '<speak> Ok, see you next time! </speak>')
      assert.equal(shouldEndSession, true)
    }
    executeFunction(event, {succeed, fail}, handler)
  })
  it('should end the session [Japanese]', () => {
    event.request.locale = 'ja-JP'
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech,
        shouldEndSession
      } = response
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(outputSpeech.ssml, '<speak> またのご利用をお待ちしております。 </speak>')
      assert.equal(shouldEndSession, true)
    }
    executeFunction(event, {succeed, fail}, handler)
  })
})

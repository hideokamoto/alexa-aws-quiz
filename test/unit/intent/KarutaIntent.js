/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const { event, executeFunction, fail } = helpers
describe('LaunchKarutaIntent', () => {
  beforeEach(() => {
    event.request.type = 'LaunchKarutaIntent'
    event.session.new = false
    event.session.attributes = {
      STATE: '_STARTMODE'
    }
  })
  it('should return valid response', () => {
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(shouldEndSession, false)
    }
    executeFunction(event, { succeed, fail }, handler)
  })
  it('start karuta in English', () => {
    event.request.locale = 'en-US'
    const succeed = data => {
      const { response } = data
      const { outputSpeech } = response
      assert.notEqual(outputSpeech.ssml.indexOf('Start karuta game.'), -1)
    }
    executeFunction(event, { succeed, fail }, handler)
  })
  it('start karuta in Japanese', () => {
    event.request.locale = 'ja-JP'
    const succeed = data => {
      const { response } = data
      const { outputSpeech } = response
      assert.notEqual(outputSpeech.ssml.indexOf('カルタゲームを始めます。'), -1)
    }
    executeFunction(event, { succeed, fail }, handler)
  })
})

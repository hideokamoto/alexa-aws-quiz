/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const { event, executeFunction, fail } = helpers
describe('LaunchQuizIntent', () => {
  beforeEach(() => {
    event.request.type = 'LaunchQuizIntent'
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
  it('should include valid game type', () => {
    event.request.locale = 'ja-JP'
    const succeed = data => {
      const { sessionAttributes } = data
      assert.equal(sessionAttributes.gameType, 'quiz')
    }
    executeFunction(event, { succeed, fail }, handler)
  })
  it('should include valid game type', () => {
    event.request.locale = 'ja-JP'
    const succeed = data => {
      const { sessionAttributes } = data
      assert.equal(sessionAttributes.STATE, '_ANSWERMODE')
    }
    executeFunction(event, { succeed, fail }, handler)
  })
})

/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const { event, executeFunction, fail } = helpers
describe('LaunchRequest', () => {
  beforeEach(() => {
    event.request.type = 'NewSession'
  })
  it('welcome ssml', () => {
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(shouldEndSession, false)
    }
    executeFunction(event, { succeed, fail }, handler)
  })
})

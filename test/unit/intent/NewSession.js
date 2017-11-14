/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction
} = helpers
/*
describe('LaunchRequest', () => {
  beforeEach(() => {
    event.request.type = 'NewSession'
  })
  it('Say hallo world', () => {
    const succeed = (data) => {
      const { response } = data
      console.log(response)
      const {
        outputSpeech
      } = response
      assert.deepEqual(
        outputSpeech,
        {
          type: 'SSML',
          ssml: '<speak> Welcome to High Low guessing game. You have played 0 times. Would you like to play? </speak>'
        }
      )
    }
    const fail = () => assert.ok(false)
    executeFunction(event, {succeed, fail}, handler)
  })
})
*/

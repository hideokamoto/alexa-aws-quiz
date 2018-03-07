/* global describe, it */
const assert = require('power-assert')
const helpers = require('./intent/helpers')
// const states = require('../../lib/states')
const getLocaleFromEvent = require('../../lib/utils/getLocale')
const {
  getQuestions,
  getServiceNames,
  makeQuiz
} = require('../../lib/utils/quiz')
const { event } = helpers

describe('Quiz Helper', () => {
  describe('#getLocaleFromEvent()', () => {
    it('should return valid locale', () => {
      const result = getLocaleFromEvent(event)
      assert.equal(result, 'ja-JP')
    })
    it('should return valid locale when given us locale', () => {
      event.request.locale = 'en-US'
      const result = getLocaleFromEvent(event)
      assert.equal(result, 'en-US')
    })
  })
  describe('#getQuestions()', () => {
    it('should get one questions at least', () => {
      const result = getQuestions('ja-JP')
      assert.notEqual(Object.keys(result).length, 0)
    })
  })
  describe('#getServiceNames()', () => {
    it('should get one questions at least', () => {
      const result = getServiceNames('ja-JP')
      assert.notEqual(result.length, 0)
    })
  })
  describe('#makeQuiz()', () => {
    const services = getQuestions('ja-JP')
    const serviceNames = getServiceNames('ja-JP')
    it('should match answer number and selected number', () => {
      const answerNumber = Math.floor(Math.random() * 3) + 1
      const { selection, correctServiceName } = makeQuiz(
        answerNumber,
        serviceNames,
        services
      )
      assert.equal(correctServiceName, selection[answerNumber - 1])
    })
  })
})

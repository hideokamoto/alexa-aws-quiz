const assert = require('power-assert')

exports.event = {
  session: {
    new: true,
    sessionId: 'amzn1.echo-api.session.[unique-value-here]',
    attributes: {},
    user: {
      userId: 'amzn1.ask.account.[unique-value-here]'
    },
    application: {
      applicationId: 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022'
    }
  },
  version: '1.0',
  request: {
    locale: 'en-US',
    timestamp: '2016-10-27T18:21:44Z',
    type: '',
    requestId: 'amzn1.echo-api.request.[unique-value-here]'
  },
  context: {
    AudioPlayer: {
      playerActivity: 'IDLE'
    },
    System: {
      device: {
        supportedInterfaces: {
          AudioPlayer: {}
        }
      },
      application: {
        applicationId: 'amzn1.ask.skill.8d4f3bd7-e62b-4506-b5a9-67f738f78022'
      },
      user: {
        userId: 'amzn1.ask.account.[unique-value-here]'
      }
    }
  }
}

exports.executeFunction = (event, assertion, handler) => {
  // eslint-disable-next-line handle-callback-err
  handler(event, assertion, (error, data) => {})
}

exports.fail = e => {
  if (e.name === 'AssertionError') {
    assert.deepEqual(e.expected, e.actual)
  } else {
    assert.ok(false)
  }
}

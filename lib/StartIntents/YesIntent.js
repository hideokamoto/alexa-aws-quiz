const states = require('../states')
module.exports = function () {
  this.handler.state = states.ANSWERMODE
  const description = `
It is a fully managed, secure desktop computing service which runs on the AWS cloud.
It allows you to easily provision cloud-based virtual desktops and provide your users access to the documents, applications, and resources they need from any supported device, including Windows and Mac computers, Chromebooks, iPads, Fire tablets, and Android tablets.
The user disk area is backed up in S3 periodically.
  `
  const selection = 'Number1 Amazon WorkDocs. Number2 Amazon WorkSpaces. Number3 Amazon S3'
  this.attributes['correctNumber'] = 2
  this.attributes['correctService'] = 'Amazon WorkSpaces'
  const say = 'Quiz1.' + description + '. What is the service ?' + selection
  this.emit(':ask', say, 'Try saying a number.')
}

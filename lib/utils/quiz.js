const getQuestions = (locale = 'en-US') => {
  switch (locale) {
    case 'ja-JP':
      return require('../translates/ja/services')
    default:
      return require('../translates/en/services')
  }
}
const getServiceNames = locale => {
  const services = getQuestions(locale)
  const serviceNames = Object.keys(services)
  return serviceNames
}
const makeQuiz = (answerNumber, serviceNames, services) => {
  const selection = []
  let quizDescription = ''
  let correctServiceName = ''
  for (let i = 1; i < 4; i++) {
    const num = Math.floor(Math.random() * serviceNames.length)
    const answer = serviceNames[num]
    if (answerNumber === i) {
      correctServiceName = answer
      quizDescription = services[answer].description
    }
    selection.push(serviceNames[num])
  }
  return { selection, quizDescription, correctServiceName }
}

module.exports.makeQuiz = makeQuiz
module.exports.getQuestions = getQuestions
module.exports.getServiceNames = getServiceNames

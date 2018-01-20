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

module.exports.getQuestions = getQuestions
module.exports.getServiceNames = getServiceNames

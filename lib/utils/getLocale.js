module.exports = function (event) {
  let lang = 'en-US'
  const { request } = event
  if (!request) return lang
  const { locale } = request
  if (!locale) return lang
  return locale
}

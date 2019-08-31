export const createLocalLink = ( url, wordPressUrl ) => {

  if (`#` === url) {
    return null
  }
  let newUrl = url.replace(wordPressUrl, ``)

  return newUrl
}

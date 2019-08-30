import config from "../../config"

export const createLocalLink = url => {

  if (`#` === url) {
    return null
  }
  let newUrl = url.replace(config.wordPressUrl, ``)

  return newUrl
}

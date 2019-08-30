import useSiteMetadata from "../hooks/use-site-metadata"

export const createLocalLink = url => {

  const { wordPressUrl } = useSiteMetadata()

  if (`#` === url) {
    return null
  }
  let newUrl = url.replace(wordPressUrl, ``)

  return newUrl
}

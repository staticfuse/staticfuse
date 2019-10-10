import useSiteMetadata from '../hooks/use-site-metadata';

/**
 * Parses a menu item object and returns Gatsby-fied URI.
 *
 * @param {object} menuItem a single menu item
 */
export const CreateLocalLink = ( menuItem ) => {
  const { blogURI, wordPressUrl } = useSiteMetadata();
  const {url, connectedObject } = menuItem;

  if (`#` === url) {
    return null
  }
  /**
   * Alway want to pull of our API URL.
   */
  let newUri = url.replace(wordPressUrl, '');

  /**
   * If it's a blog link, respect the users blogURI setting.
   */
  if (connectedObject && connectedObject.__typename === 'WPGraphQL_Post') {
    newUri = blogURI + newUri;
  }

  return newUri;
}
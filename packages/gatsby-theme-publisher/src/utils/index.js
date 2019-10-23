import usePublisherOptions from '../hooks/use-publisher-options';

/**
 * Parses a menu item object and returns Gatsby-fied URI.
 *
 * @param {object} menuItem a single menu item
 */
export const CreateLocalLink = (menuItem) => {
  const { blogURI, wordPressUrl } = usePublisherOptions();
  const { url, connectedObject } = menuItem;

  if (url === '#') {
    return null;
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
};


export const formatPublisherMenu = (menu) => {
  /**
   * Normalize object shape to match that of the WP menu.
   */
  const newMenu = menu.map((menuItem) => {
    const newMenuItem = { ...menuItem };
    const childItems = menuItem.childItems ? menuItem.childItems : [];
    newMenuItem.childItems = { nodes: childItems };
    return newMenuItem;
  });

  return {
    nodes: newMenu,
  };
};

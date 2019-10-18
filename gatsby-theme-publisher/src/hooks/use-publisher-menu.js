import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          publisherMenuConfig {
            url
            isExternal
            label
            hasSubMenu
            childItems {
              url
              isExternal
              label
            }
          }
        }
      }
    }
  `);

  const { publisherMenuConfig } = data.site.siteMetadata;

  /**
   * Normalize object shape to match that of the WP menu.
   */
  const menu = publisherMenuConfig.map((menuItem) => {
    const newMenuItem = { ...menuItem };
    const childItems = menuItem.childItems ? menuItem.childItems : [];
    newMenuItem.childItems = { nodes: childItems };
    return newMenuItem;
  });

  return menu;
};

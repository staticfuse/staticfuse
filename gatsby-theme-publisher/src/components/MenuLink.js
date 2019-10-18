import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';
import { CreateLocalLink } from '../utils';

const MenuLink = ({ menuItem }) => {
  // console.log(MenuLink);

  /**
  * Is the item a "custom" menu item?
  */
  const isCustom = menuItem.connectedObject
  && menuItem.connectedObject.__typename === 'WPGraphQL_MenuItem'
  && menuItem.url !== '/';

  /**
   * If all else fails, we'll just return the label.
   */
  let link = menuItem.label;

  /**
   * If it's a custom link, we treat it a little different.
   * Else if we can create a local link, lets do it.
   */
  if (isCustom || menuItem.isExternal) {
    link = (
      <Box
        as="a"
        href={menuItem.url}
        textDecoration="none"
        m="0"
        display="block"
        rel="noopener noreferrer"
      >
        <Box as="span" color="navLink" py={[2, 2, '0']} display="block">
          {menuItem.label}
        </Box>
      </Box>
    );
  } else if (CreateLocalLink(menuItem)) {
    link = (
      <Link
        style={{
          textDecoration: 'none',
          display: 'block',
        }}
        to={CreateLocalLink(menuItem)}
      >
        <Box as="span" color="navLink" py={[2, 2, '0']} display="block">
          {menuItem.label}
        </Box>
      </Link>
    );
  }

  return link;
};

export default MenuLink;

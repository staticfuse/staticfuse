import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { IconButton, Box } from '@chakra-ui/core';
import useSiteMetadata from '../hooks/use-site-metadata';
import usePublisherMenu from '../hooks/use-publisher-menu';
import Logo from './Logo';
import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import MenuLink from './MenuLink';

/**
 * Get all menues with children.
 * We'll use this query to try and pull out the menu from the theme settings.
 */
const MENU_QUERY = graphql`
  fragment MenuFields on WPGraphQL_MenuItem {
    id
    label
    url
    connectedObject {
      __typename
    }
  }

  query GET_MENU_ITEMS {
    wpgraphql {
      menus {
        edges {
          node {
            id
            menuId
            name
            slug
            count
            menuItems {
              nodes {
                ...MenuFields
                childItems {
                  nodes {
                    ...MenuFields
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Menu = () => {
  const publisherMenu = usePublisherMenu();
  const { menuName, wordPressUrl } = useSiteMetadata();
  const [subMenuOpen, openSubMenu] = useState(false);
  const [menuOpened, openMenu] = useState(false);

  const isMobile = () => {
    const mql = window.matchMedia('(max-width: 750px)');
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
      && mql.matches
    ) {
      return true;
    }
    return false;
  };

  const handleMouseEnter = (menuItem) => {
    // only add this hover event on the desktop menu if there is a sub menu
    if (
      menuItem.childItems
      && menuItem.childItems.nodes.length
      && !isMobile()
    ) {
      openSubMenu(true);
    }
  };

  const handleMouseLeave = (menuItem) => {
    // only add this hover event on the desktop menu if there is a sub menu
    if (
      menuItem.childItems
      && menuItem.childItems.nodes.length
      && !isMobile()
    ) {
      openSubMenu(false);
    }
  };

  const renderSubMenu = (items) => (
    <>
      <IconButton
        aria-label="open sub menu"
        icon="add"
        size="xs"
        color="navLink"
        variant="unstyled"
        opacity=".7"
        textAlign="center"
        position={['absolute', 'absolute', 'static']}
        right="0"
        height="55px"
        width="55px"
        ml={['0', '0', 1]}
        display={['block', 'block', 'none']}
        top="0"
        z-index="9"
        onClick={() => (subMenuOpen ? openSubMenu(false) : openSubMenu(true))}
      />
      <Box
        as="ul"
        bg="headerBg"
        m="0"
        ml={[2, 2, '0']}
        mt={[subMenuOpen ? 2 : '0', subMenuOpen ? 2 : '0', '0']}
        p={['0', '0', 2]}
        pr={[1, 1, 3]}
        rounded={3}
        position={['static', 'static', 'absolute']}
        maxHeight={subMenuOpen ? '1000px' : '0'}
        height="auto"
        overflow="hidden"
        top="40px"
        left="-20px"
        listStyleType="none"
        border={['none', 'none', '1px solid rgba(255,255,255,.3)']}
        maxH={subMenuOpen ? '1000px' : '0'}
        minW="150px"
        transform={[
          subMenuOpen ? 'scale(1)' : 'scale(.95)',
          subMenuOpen ? 'scale(1)' : 'scale(.95)',
          'scale(1)',
        ]}
        transition={
            subMenuOpen
              ? 'all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)'
              : 'all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)'
          }
        opacity={subMenuOpen ? '1' : '0'}
      >
        {items.map((subItem) => renderMenuItem(subItem, false))}
      </Box>
    </>
  );

  const renderMenuItem = (menuItem, border = false) => (
    <Box
      as="li"
      fontSize={['xl', 'xl', 'sm']}
      className="menu-item"
      mb="0"
      mx={['0', '0', 2]}
      key={menuItem.id}
      position="relative"
      display={['block', 'block', 'flex']}
      borderBottom={[
        border ? '1px solid rgba(255,255,255,.3)' : '',
        border ? '1px solid rgba(255,255,255,.3)' : '',
        'none',
      ]}
      p="0"
      py={1}
      _last={{ paddingBottom: '0' }}
      transform={[
        menuOpened
          ? 'scale(1) translateY(0px)'
          : 'scale(.95) translateY(-10px)',
        menuOpened
          ? 'scale(1) translateY(0px)'
          : 'scale(.95) translateY(-10px)',
        'scale(1) translateY(0)',
      ]}
      transition="transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
      style={{
        transitionDelay: '.1s',
      }}
      onMouseEnter={() => handleMouseEnter(menuItem)}
      onMouseLeave={() => handleMouseLeave(menuItem)}
    >
      <MenuLink menuItem={menuItem} />
      {menuItem.childItems && menuItem.childItems.nodes.length
        ? renderSubMenu(menuItem.childItems.nodes)
        : null}
    </Box>
  );

  // print out WordPress menu items if the menu name is set in the config
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
        if (data.wpgraphql.menus) {
          const { edges } = data.wpgraphql.menus;
          // Check to see if the menuName theme setting matches a menu.
          const [menu] = edges.filter((m) => menuName === m.node.name);

          return (
            <Box
              className="menu-wrapper"
              position={['absolute', 'absolute', 'static']}
              display={['block', 'block', 'flex']}
              top="0"
              left="0"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              zIndex="99"
              overflow={['hidden', 'hidden', 'visible']}
              transition={
                menuOpened
                  ? 'all 0.3s ease-in, background 0.5s ease-in'
                  : 'all 0.5s ease-out, background 1s ease-out'
              }
              style={{
                transitionDelay: '.1s',
              }}
              height={menuOpened ? '100%' : '50px'}
              bg="headerBg"
            >
              <Logo />

              <div
                onClick={() => (menuOpened ? openMenu(false) : openMenu(true))}
              >
                <HamburgerMenu menuOpen={menuOpened} />
              </div>

              <Box display={['block', 'block', 'flex']} alignItems="center">
                <Box order="2">
                  <SearchBar menuOpen={menuOpened} />
                </Box>

                <Box
                  as="ul"
                  listStyleType="none"
                  display={['block', 'block', 'flex']}
                  align="center"
                  position="relative"
                  m="0"
                  p={[4, 4, '0']}
                >
                  {/* If we have a menuName, do the WordPress menu */
                  menuName
                    ? menu.node.menuItems.nodes.map((menuItem) => renderMenuItem(menuItem, wordPressUrl, true))
                    : publisherMenu.map((menuItem) => { // If no menuName, do the starter pages menu
                      const { id, path, context } = menuItem.node;
                      return renderMenuItem({
                        id,
                        url: path,
                        label: context.label,
                      });
                    })
}
                </Box>
              </Box>
            </Box>
          );
        }
        return null;
      }}
    />
  );
};

export default Menu;

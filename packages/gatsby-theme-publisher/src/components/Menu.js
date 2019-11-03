import React, { useState } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Box } from '@chakra-ui/core';
import usePublisherOptions from '../hooks/use-publisher-options';
import Logo from './Logo';
import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import MenuItem from './MenuItem';

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
  const { menuName, publisherMenuConfig, starterPages } = usePublisherOptions();
  const [menuOpened, openMenu] = useState(false);

  const publisherMenu = starterPages && publisherMenuConfig.nodes.map(((menuItem) => (
    <MenuItem key={menuItem.label} menuItem={menuItem} />
  )));

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
              <Link to="/" rel="home" itemProp="url">
                <Logo />
              </Link>

              <div
                onClick={() => (menuOpened ? openMenu(false) : openMenu(true))}
                onKeyDown={() => (menuOpened ? openMenu(false) : openMenu(true))}
                role="button"
                tabIndex={0}
              >
                <HamburgerMenu menuOpen={menuOpened} />
              </div>

              <Box display={['block', 'block', 'flex']} alignItems="center">
                <Box order="2">
                  <SearchBar menuOpen={menuOpened} />
                </Box>

                <Box
                  as="ul"
                  transition="transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
                  transform={[
                    menuOpened
                      ? 'scale(1) translateY(0px)'
                      : 'scale(.95) translateY(-10px)',
                    menuOpened
                      ? 'scale(1) translateY(0px)'
                      : 'scale(.95) translateY(-10px)',
                    'scale(1) translateY(0px)',
                  ]}
                  zIndex="1"
                  style={{
                    transitionDelay: '.1s',
                  }}
                  className="menu-list"
                  listStyleType="none"
                  display={['block', 'block', 'flex']}
                  align="center"
                  position="relative"
                  m="0"
                  p={[4, 4, '0']}
                >
                  {/* If we have a menuName, do the WordPress menu */
                  menuName
                    ? menu.node.menuItems.nodes.map((menuItem) => (
                      <MenuItem key={menuItem.id} menuItem={menuItem} />
                    )) : publisherMenu
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

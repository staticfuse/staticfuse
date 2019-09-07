<<<<<<< HEAD
import React, { useState } from "react"
=======
import React from "react"
>>>>>>> 6030266090bacceeda2bf529d564216644ecc195
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../utils"
import useSiteMetadata from "../hooks/use-site-metadata"
<<<<<<< HEAD
import { PseudoBox, Icon, Box } from "@chakra-ui/core"
=======
import {
  Menu as CHMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/core"
>>>>>>> 6030266090bacceeda2bf529d564216644ecc195

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
`

const Menu = ({ location }) => {
<<<<<<< HEAD
  const { wordPressUrl } = useSiteMetadata()
  const [showSubmenu, setShowSubmenu] = useState(false)
=======
  const { menuId, wordPressUrl } = useSiteMetadata()
>>>>>>> 6030266090bacceeda2bf529d564216644ecc195

  const renderLink = (menuItem, wordPressUrl, colorKey) =>
    menuItem.connectedObject.__typename === "WPGraphQL_MenuItem" ? (
      <a
        href={menuItem.url}
        style={{ textDecoration: "none", mr: 2 }}
        rel="noopener noreferrer"
      >
        <Box as="span" color={colorKey == "navLink" ? "navLink" : 'subMenuLink'}>{menuItem.label}</Box>
      </a>
    ) : createLocalLink(menuItem.url, wordPressUrl) ? (
      <Link
        style={{ textDecoration: "none" }}
        to={createLocalLink(menuItem.url, wordPressUrl)}
      >
        <Box as="span" color={colorKey == "navLink" ? "navLink" : 'subMenuLink'}>{menuItem.label}</Box>
      </Link>
    ) : (
      menuItem.label
    )

  const renderMenuItem = (menuItem, wordPressUrl) => {
    if (menuItem.childItems && menuItem.childItems.nodes.length) {
      return renderSubMenu(menuItem, wordPressUrl)
    } else {
      return (
<<<<<<< HEAD
        <Box as="li" fontSize="sm"
=======
        <div
>>>>>>> 6030266090bacceeda2bf529d564216644ecc195
          className="menu-item"
          key={menuItem.id}
          style={{ marginLeft: "10px" }}
        >
<<<<<<< HEAD
          {renderLink(menuItem, wordPressUrl, "navLink")}
        </Box>
=======
          {renderLink(menuItem, wordPressUrl)}
        </div>
>>>>>>> 6030266090bacceeda2bf529d564216644ecc195
      )
    }
  }

  const renderSubMenu = (menuItem, wordPressUrl) => {
    return (
<<<<<<< HEAD
      <Box onMouseLeave={() => setShowSubmenu(false)} position="relative">
        <Box as="li" fontSize="sm" onMouseEnter={() => setShowSubmenu(true)}>
          {renderLink(menuItem, wordPressUrl, "navLink")}
        </Box>

          <PseudoBox
            as="ul"
            listStyleType="none"
            position="absolute"
            m="0"
            rounded="3px"
            top="35px"
            left="-40px"
            minW="150px"
            textTransform="uppercase"
            fontWeight="300"
            fontSize="sm"
            p={2}
            color="subMenuBg"
            bg="gray.50"
            border="1px solid"
            borderColor="gray.100"
            zIndex={ showSubmenu ? "999" : "-1" }
            opacity={ showSubmenu ? "1" : "0" }
            className="submenu"
            transform={ showSubmenu ? "translateZ(0)" : "translate3d(0,10px,0)" }
            transition="all .3s"
            _before={{
              borderColor: "hsla(0,0%,93.3%,0) hsla(0,0%,93.3%,0) #fafafa",
              borderWidth: "6px",
              marginLeft: "-6px",
              bottom: "100%",
              left: "50%",
              borderStyle: "solid",
              content: `""`,
              height: "0",
              width: "0",
              position: "absolute",
              pointerEvents: "none",
            }}
            
          >
            {menuItem.childItems.nodes.map(item => (
              <li
                className="menu-item"
                key={item.id}
                style={{padding: ".5rem"}}
              >
                {renderLink(item, wordPressUrl, "subMenuLink")}
              </li>
            ))}
          </PseudoBox>
      </Box>
=======
      <div key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl)}
        <MenuButton rightIcon="chevron-down">
          <Icon name="chevron-down" color="#fff" />
        </MenuButton>
        <MenuList bg="gray.800">
          {menuItem.childItems.nodes.map(item => (
            <MenuItem key={item.id}>
              {renderMenuItem(item, wordPressUrl)}
            </MenuItem>
          ))}
        </MenuList>
      </div>
>>>>>>> 6030266090bacceeda2bf529d564216644ecc195
    )
  }

  return (
    <StaticQuery
      query={MENU_QUERY}
      render={data => {
        if (data.wpgraphql.menus) {
          const { edges } = data.wpgraphql.menus
          // Check to see if the menuId theme setting matches an menu.
          const [menu] = edges.filter(menu => menuId === menu.node.menuId)

          /**
           * If no match, the theme doesn't have a setting or the id is incorrect.
           * Regardless, return early.
           */
          if (!menu) {
            return null
          }

          return (
<<<<<<< HEAD
            <Box
              as="ul"
              display="flex"
              listStyleType="none"
              justify="space-between"
              align="center"
              m="0"
              p="0"
            >
              {data.wpgraphql.menuItems.nodes.map(menuItem => {
                if (menuItem.childItems.nodes.length) {
                  return renderSubMenu(menuItem, wordPressUrl)
                } else {
                  return renderMenuItem(menuItem, wordPressUrl)
                }
              })}
            </Box>
=======
            <CHMenu>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {menu.node.menuItems.nodes.map(item => {
                  if (item.childItems.nodes.length) {
                    return renderSubMenu(item, wordPressUrl)
                  } else {
                    return renderMenuItem(item, wordPressUrl)
                  }
                })}
              </div>
            </CHMenu>
>>>>>>> 6030266090bacceeda2bf529d564216644ecc195
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default Menu

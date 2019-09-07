import React, { useRef, useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../utils"
import { navigate } from "@reach/router"
import useSiteMetadata from "../hooks/use-site-metadata"
import {
  Menu as CHMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/core"

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
  const { menuId, wordPressUrl } = useSiteMetadata()

  const renderLink = (menuItem, wordPressUrl) =>
    menuItem.connectedObject.__typename === "WPGraphQL_MenuItem" ? (
      <a
        href={menuItem.url}
        style={{ color: "white", textDecoration: "none", mr: 2 }}
        className="uppercase text-xs"
        rel="noopener noreferrer"
      >
        {menuItem.label}
      </a>
    ) : createLocalLink(menuItem.url, wordPressUrl) ? (
      <Link
        className="uppercase text-xs"
        style={{ color: "white", textDecoration: "none" }}
        to={createLocalLink(menuItem.url, wordPressUrl)}
      >
        {menuItem.label}
      </Link>
    ) : (
      menuItem.label
    )

  const renderMenuItem = (menuItem, wordPressUrl) => {
    if (menuItem.childItems && menuItem.childItems.nodes.length) {
      return renderSubMenu(menuItem, wordPressUrl)
    } else {
      return (
        <div
          className="menu-item"
          key={menuItem.id}
          style={{ marginLeft: "10px" }}
        >
          {renderLink(menuItem, wordPressUrl)}
        </div>
      )
    }
  }

  const renderSubMenu = (menuItem, wordPressUrl) => {
    return (
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
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default Menu

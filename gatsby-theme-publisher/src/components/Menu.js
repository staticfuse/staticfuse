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
  Icon
} from "@chakra-ui/core"

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
      menuItems(where: { location: PRIMARY }) {
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
`

const Menu = ({ location }) => {
  const { wordPressUrl } = useSiteMetadata()

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
        <div className="menu-item" key={menuItem.id} style={{marginLeft:'10px'}}>
          {renderLink(menuItem, wordPressUrl)}
        </div>
      )
    }
  }

  const renderSubMenu = (menuItem, wordPressUrl) => {
    return (
      <>
      {renderLink(menuItem, wordPressUrl)}
      <MenuButton rightIcon="chevron-down">
        <Icon name="chevron-down" color="#fff" />
      </MenuButton>
      <MenuList bg='gray.800'>
          {menuItem.childItems.nodes.map(item =>
            ( <MenuItem>{renderMenuItem(item, wordPressUrl)}</MenuItem> )
          )}
       </MenuList>
      </>
    )
  }

  return (
    <StaticQuery
      query={MENU_QUERY}
      render={data => {
        if (data.wpgraphql.menuItems) {
          return (
            <CHMenu>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                {data.wpgraphql.menuItems.nodes.map(menuItem => {
                  if (menuItem.childItems.nodes.length) {
                    return renderSubMenu(menuItem, wordPressUrl)
                  } else {
                    return renderMenuItem(menuItem, wordPressUrl)
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

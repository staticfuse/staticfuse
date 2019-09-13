import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../utils"
import useSiteMetadata from "../hooks/use-site-metadata"
import { IconButton, Box, Flex } from "@chakra-ui/core"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import HamburgerMenu from "./HamburgerMenu"

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
  const { menuName, wordPressUrl } = useSiteMetadata()
  const [subMenuOpen, openSubMenu] = useState(false)
  const [menuOpened, openMenu] = useState(false)

  const isMobile = () => {
    let mql = window.matchMedia("(max-width: 750px)")
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) &&
      mql.matches
    ) {
      return true
    }
    return false
  }

  const renderLink = (menuItem, wordPressUrl) =>
    menuItem.connectedObject.__typename === "WPGraphQL_MenuItem" &&
    menuItem.url !== "/" ? (
      <Box
        as="a"
        href={menuItem.url}
        textDecoration="none"
        m="0"
        display="block"
        rel="noopener noreferrer"
      >
        <Box as="span" color="navLink">
          {menuItem.label}
        </Box>
      </Box>
    ) : createLocalLink(menuItem.url, wordPressUrl) ? (
      <Link
        style={{
          textDecoration: "none",
          display: "block"
        }}
        to={createLocalLink(menuItem.url, wordPressUrl)}
      >
        <Box as="span" color="navLink">
          {menuItem.label}
        </Box>
      </Link>
    ) : (
      menuItem.label
    )

  const renderSubMenu = (items, wordPressUrl) => (
    <>
      <IconButton
        aria-label="open sub menu"
        icon="triangle-down"
        size="xs"
        color="navLink"
        variant="ghost"
        opacity=".7"
        position={["absolute", "absolute", "static"]}
        right="0"
        ml={["0", "0", 1]}
        top="0"
        z-index="9"
        onClick={() => (subMenuOpen ? openSubMenu(false) : openSubMenu(true))}
      />
      <Box
        as="ul"
        bg="headerBg"
        m="0"
        ml={1}
        p={["0", "0", 2]}
        pr={[1, 1, 3]}
        rounded={3}
        position={["static", "static", "absolute"]}
        top="40px"
        left="-20px"
        listStyleType="none"
        height="auto"
        maxH={subMenuOpen ? "1000px" : "0"}
        transform={[
          subMenuOpen ? "scale(1)" : "scale(.95)",
          subMenuOpen ? "scale(1)" : "scale(.95)",
          "scale(1)",
        ]}
        transition={
          subMenuOpen
            ? "all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
            : "all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
        }
        opacity={subMenuOpen ? "1" : "0"}
      >
        {items.map(subItem => {
          return renderMenuItem(subItem, wordPressUrl)
        })}
      </Box>
    </>
  )

  const renderMenuItem = (menuItem, wordPressUrl) => {
    return (
      <Box
        as="li"
        fontSize={["xl", "xl", "md"]}
        className="menu-item"
        mb={"0"}
        mx={["0", "0", 2]}
        key={menuItem.id}
        position="relative"
        display={["block", "block", "flex"]}
        p="0"
        py={1}
        _last={{ paddingBottom: "0" }}
        transform={[
          menuOpened
            ? "scale(1) translateY(0px)"
            : "scale(.95) translateY(-10px)",
            menuOpened
            ? "scale(1) translateY(0px)"
            : "scale(.95) translateY(-10px)",
          "scale(1) translateY(0)",
        ]}
        transition="transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
        style={{
          transitionDelay: ".1s",
        }}
      >
        {renderLink(menuItem, wordPressUrl)}
        {menuItem.childItems && menuItem.childItems.nodes.length
          ? renderSubMenu(menuItem.childItems.nodes, wordPressUrl)
          : null}
      </Box>
    )
  }

  return (
    <StaticQuery
      query={MENU_QUERY}
      render={data => {
        if (data.wpgraphql.menus) {
          const { edges } = data.wpgraphql.menus
          // Check to see if the menuName theme setting matches a menu.
          const [menu] = edges.filter(menu => menuName === menu.node.name)

          /**
           * If no match, the theme doesn't have a setting or the id is incorrect.
           * Regardless, return early.
           */
          if (!menu) {
            return null
          }

          return (
            <Box
              className="menu-wrapper"
              position={["absolute", "absolute", "static"]}
              display={["block", "block", "flex"]}
              top="0"
              left="0"
              height="50px"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              zIndex="99"
              overflow={["hidden", "hidden", "visible"]}
              transition={
                menuOpened
                  ? "all 0.3s ease-in, background 0.5s ease-in"
                  : "all 0.5s ease-out, background 1s ease-out"
              }
              style={{
                transitionDelay: ".1s",
              }}
              height={menuOpened ? "100%" : "50px"}
              bg="headerBg"
            >
              <Logo />

              <div
                onClick={() => (menuOpened ? openMenu(false) : openMenu(true))}
              >
                <HamburgerMenu menuOpen={menuOpened} />
              </div>

              <Box display={["block", "block", "flex"]} alignItems="center">
                <Box order="2"><SearchBar menuOpen={menuOpened} /></Box>

                <Box
                  as="ul"
                  listStyleType="none"
                  display={["block", "block", "flex"]}
                  align="center"
                  position="relative"
                  m="0"
                  p={[4, 4, "0"]}
                >
                  {menu.node.menuItems.nodes.map(menuItem => {
                    return renderMenuItem(menuItem, wordPressUrl)
                  })}
                </Box>
              </Box>
            </Box>
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default Menu

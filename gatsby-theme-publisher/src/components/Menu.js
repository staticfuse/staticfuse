/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef, useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../utils"
import { BodyClass } from "react-extras"
import MenuToggle from "./MenuToggle"
import { FaSearch } from "react-icons/fa"
import { navigate } from "@reach/router"
import useSiteMetadata from "../hooks/use-site-metadata"

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

const renderLink = (menuItem, wordPressUrl) =>
  menuItem.connectedObject.__typename === "WPGraphQL_MenuItem" ? (
    <a
      href={menuItem.url}
      sx={{ color: "white", textDecoration: "none", mr: 2 }}
      className="uppercase text-xs"
      rel="noopener noreferrer"
    >
      {menuItem.label}
    </a>
  ) : createLocalLink(menuItem.url, wordPressUrl) ? (
    <Link
      className="uppercase text-xs"
      sx={{ color: "white", textDecoration: "none" }}
      to={createLocalLink(menuItem.url, wordPressUrl)}
    >
      {menuItem.label}
    </Link>
  ) : (
    menuItem.label
  )

const renderMenuItem = (menuItem, wordPressUrl, showSubMenu) => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem, wordPressUrl, showSubMenu)
  } else {
    return (
      <li className="menu-item text-gray-800 text-white" key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl)}
      </li>
    )
  }
}

const renderSubMenu = (menuItem, wordPressUrl, showSubMenu) => {
  return (
    <li
      className="has-subMenu menu-item"
      key={menuItem.id}
      onMouseOver={Menu.handleSubMenu}
    >
      {renderLink(menuItem, wordPressUrl)}
      {showSubMenu && (
        <ul
          className="menuItemGroup sub-menu rounded"
          sx={{ listStyle: "none" }}
        >
          {menuItem.childItems.nodes.map(item =>
            renderMenuItem(item, wordPressUrl)
          )}
        </ul>
      )}
    </li>
  )
}

const Menu = ({ location }) => {
  const navRef = useRef()
  const searchBar = useRef()
  const [showSubMenu, setShowSubMenu] = useState(false)
  const { wordPressUrl } = useSiteMetadata()

  const clickSearch = () => {
    searchBar.current.classList.toggle("show-search")
    setTimeout(() => {
      searchBar.current.focus()
    }, 200)
  }

  const handleSearch = e => {
    console.log(e.target.value)
    navigate("about#some-link")
  }

  const handleSubMenu = () => {
    showSubMenu ? setShowSubMenu(false) : setShowSubMenu(true)
  }

  return (
    <StaticQuery
      query={MENU_QUERY}
      render={data => {
        if (data.wpgraphql.menuItems) {
          return (
            <nav
              id="site-navigation"
              className="main-navigation"
              role="navigation"
              aria-label="Primary Menu"
              ref={navRef}
            >
              {/* <MenuToggle onClick={openNav} /> */}

              <div className="menu-primary-container hidden sm:block">
                {/* <input type="text" className="menu-search rounded border p-1 float-left" ref={searchBar} onChange={handleSearch} /> */}

                <ul
                  id="menu-primary"
                  className="primary-menu"
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* <li><FaSearch className="text-xs text-white" onClick={clickSearch} /></li> */}
                  {data.wpgraphql.menuItems.nodes.map(menuItem => {
                    if (menuItem.childItems.nodes.length) {
                      return renderSubMenu(menuItem, wordPressUrl, showSubMenu)
                    } else {
                      return renderMenuItem(menuItem, wordPressUrl, showSubMenu)
                    }
                  })}
                </ul>
              </div>
            </nav>
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default Menu

import React, { useRef, useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { createLocalLink } from '../utils';
import { BodyClass } from 'react-extras';
import MenuToggle from './MenuToggle';
import { FaSearch } from 'react-icons/fa';
import { navigate } from '@reach/router';
import useSiteMetadata from "../hooks/use-site-metadata";

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
`;

const renderLink = ( menuItem, wordPressUrl ) =>
  menuItem.connectedObject.__typename === 'WPGraphQL_MenuItem' ? (
    <a href={menuItem.url} className="uppercase text-xs" rel="noopener noreferrer">
      {menuItem.label}
    </a>
  ) : createLocalLink(menuItem.url, wordPressUrl) ? (
    <Link className="uppercase text-xs" to={createLocalLink(menuItem.url, wordPressUrl)}>{menuItem.label}</Link>
  ) : (
    menuItem.label
  );

const renderMenuItem = ( menuItem, wordPressUrl ) => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem, wordPressUrl);
  } else {
    return (
      <li className="menu-item text-gray-800 text-white" key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl)}
      </li>
    );
  }
};

const renderSubMenu = (menuItem, wordPressUrl) => {
  return (
    <li className="has-subMenu menu-item" key={menuItem.id}>
      {renderLink(menuItem, wordPressUrl)}
      <ul className="menuItemGroup sub-menu rounded">
        {menuItem.childItems.nodes.map(item => renderMenuItem(item, wordPressUrl))}
      </ul>
    </li>
  );
};

const Menu = ({ location }) => {
  const navRef = useRef();
  const searchBar = useRef();
  const [navOpen, setNavOpen] = useState(false);
  const { wordPressUrl } = useSiteMetadata()

  const openNav = () => {
    navRef.current.classList.toggle('toggled-on');
    navRef.current.classList.toggle('nav-enabled');
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };

  const clickSearch = () => {
    searchBar.current.classList.toggle('show-search');
    setTimeout( () => {
      searchBar.current.focus();
    }, 200);
    
  }

  const handleSearch = (e) => {
    console.log(e.target.value)
    navigate('about#some-link');
  }
  
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={data => {
        if (data.wpgraphql.menuItems) {
          return (
            <nav
              id="site-navigation"
              className="main-navigation flex items-center justify-end"
              role="navigation"
              aria-label="Primary Menu"
              ref={navRef}
            >
              <MenuToggle onClick={openNav} />

              {navOpen && <BodyClass add="nav-open" />}
              <div className="menu-primary-container hidden sm:block">

              {/* <input type="text" className="menu-search rounded border p-1 float-left" ref={searchBar} onChange={handleSearch} /> */}
              
                <ul
                  id="menu-primary"
                  className="primary-menu flex items-center list-none"
                >
                 {/* <li><FaSearch className="text-xs text-white" onClick={clickSearch} /></li> */}
                  {data.wpgraphql.menuItems.nodes.map(menuItem => {
                    if (menuItem.childItems.nodes.length) {
                      return renderSubMenu(menuItem, wordPressUrl);
                    } else {
                      return renderMenuItem(menuItem, wordPressUrl);
                    }
                  })}
                </ul>
              </div>
            </nav>
          );
        } else {
          return null;
        }
      }}
    />
  );
};

export default Menu;

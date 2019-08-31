import React from 'react'
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { Layout as ThemeLayout, Styled } from "theme-ui";
import "../css/tailwind-customizations.css"
import "../css/index.scss"

const Layout = props => (
  <ThemeLayout>
    <Header />
    <div className="site-content max-w-6xl m-auto p-8 pt-2">{props.children}</div>
    <Footer />
  </ThemeLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

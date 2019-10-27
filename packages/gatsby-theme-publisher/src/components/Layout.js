import React from 'react';
import { Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Globals from './Globals';

const Layout = (props) => (
  <>
    <Globals />
    <Header />
    <Box
      maxW={props.fullWidth ? '100%' : '5xl'}
      m={props.fullWidth ? '0' : '1.5rem auto 0 auto'}
      p={props.fullWidth ? '0' : '10px'}
      className="site-content"
    >
      {props.children}
    </Box>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

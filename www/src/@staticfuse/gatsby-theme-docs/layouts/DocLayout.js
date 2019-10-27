import React from 'react';
import Globals from '@staticfuse/gatsby-theme-publisher/src/components/Globals';
import Header from '@staticfuse/gatsby-theme-publisher/src/components/Header';
import Footer from '@staticfuse/gatsby-theme-publisher/src/components/Footer';
import { Box } from '@chakra-ui/core';

const DocLayout = (props) => (
  <Box>
    <Header maxW="5xl" />
    <Globals />
    <Box maxW="5xl" m="40px auto">
      {props.children}
    </Box>
    <Footer />
  </Box>
);

export default DocLayout;

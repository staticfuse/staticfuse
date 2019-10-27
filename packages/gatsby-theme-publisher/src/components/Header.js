import React from 'react';
import { Box } from '@chakra-ui/core';
import Menu from './Menu';

const Header = ({ maxW = '4xl' }) => (
  <Box bg="headerBg" p=".5rem 2rem" minH="50px">
    <Box maxW={maxW} m="auto">
      <Box
        display={['block', 'flex']}
        alignItems="center"
        justify={['inherit', 'space-between']}
        className="nav-wrapper"
      >
        <Menu />
      </Box>
    </Box>
  </Box>
);

export default Header;

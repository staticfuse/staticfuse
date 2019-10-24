import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import staticFuseDocsTheme from './src/theme';

const wrap = ({ element }) => (
  <ThemeProvider theme={staticFuseDocsTheme}>
    {element}
  </ThemeProvider>
);

export default wrap;

import React from 'react';
import { CSSReset } from '@chakra-ui/core';

const DocsLayout = (props) => (
  <div className="staticfuse-docs-layout">
    <CSSReset />
    {props.children}
  </div>
);


export default DocsLayout;

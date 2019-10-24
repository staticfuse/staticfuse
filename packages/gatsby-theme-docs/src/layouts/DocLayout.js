import React from 'react';
import { CSSReset } from '@chakra-ui/core';

const DocsLayout = (props) => (
  <div className="staticfuse-docs-layout">
    <CSSReset />
    <h1>from docs themejhjh</h1>
    {props.children}
  </div>
);


export default DocsLayout;

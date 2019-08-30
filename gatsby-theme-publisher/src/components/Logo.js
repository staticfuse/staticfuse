import React from 'react';
import { Link } from 'gatsby';
import siteLogo from '../images/site-logo.png';

const Logo = ( { data } ) => {

  return (
    <Link to="/" className="h-10 overflow-hidden block" rel="home" itemProp="url">
      <img
        src={siteLogo}
        alt="Site Logo"
        width="150"
        height="150"
        className="h-full w-auto block"
        itemProp="logo"
      />
    </Link>
  );
  }

export default Logo;

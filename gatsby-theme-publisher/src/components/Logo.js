/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from 'gatsby';
import siteLogo from '../images/site-logo.png';

const Logo = ( { data } ) => {

  return (
    <Link to="/" className="h-10 overflow-hidden block" sx={{
      overflow: 'hidden',
      height: '50px',
      width: '50px'
    }} rel="home" itemProp="url">
      <img
        src={siteLogo}
        alt="Site Logo"
        className="site-logo"
        itemProp="logo"
        sx={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </Link>
  );
  }

export default Logo;

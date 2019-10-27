import React from 'react';
import { Link } from 'gatsby';

const Toc = ({ label, path, isActive }) => (
  <Link className={`${isActive} sfdocs-section-link`} to={path}>
    {label}
  </Link>
);

export default Toc;

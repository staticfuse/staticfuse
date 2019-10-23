import React, { useState } from 'react';
import { Box } from '@chakra-ui/core';
import MenuLink from './MenuLink';
// eslint-disable-next-line import/no-cycle
import MenuSub from './MenuSub';

const MenuItem = ({ menuItem, menuOpened = false, border = false }) => {
  const [subMenuOpen, openSubMenu] = useState(false);

  const isMobile = () => {
    const mql = window.matchMedia('(max-width: 750px)');
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
      && mql.matches
    ) {
      return true;
    }
    return false;
  };

  const handleMouseEnter = (item) => {
    // only add this hover event on the desktop menu if there is a sub menu
    if (
      item.childItems
      && item.childItems.nodes.length
      && !isMobile()
    ) {
      openSubMenu(true);
    }
  };

  const handleMouseLeave = (item) => {
    // only add this hover event on the desktop menu if there is a sub menu
    if (
      item.childItems
      && item.childItems.nodes.length
      && !isMobile()
    ) {
      openSubMenu(false);
    }
  };

  return (
    <Box
      as="li"
      fontSize={['xl', 'xl', 'sm']}
      className="menu-item"
      mb="0"
      mx={['0', '0', 2]}
      key={menuItem.label}
      position="relative"
      display={['block', 'block', 'flex']}
      borderBottom={[
        border ? '1px solid rgba(255,255,255,.3)' : '',
        border ? '1px solid rgba(255,255,255,.3)' : '',
        'none',
      ]}
      p="0"
      py={1}
      _last={{ paddingBottom: '0' }}
      transform={[
        menuOpened
          ? 'scale(1) translateY(0px)'
          : 'scale(.95) translateY(-10px)',
        menuOpened
          ? 'scale(1) translateY(0px)'
          : 'scale(.95) translateY(-10px)',
        'scale(1) translateY(0)',
      ]}
      transition="transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
      style={{
        transitionDelay: '.1s',
      }}
      onMouseEnter={() => handleMouseEnter(menuItem)}
      onMouseLeave={() => handleMouseLeave(menuItem)}
    >
      <MenuLink menuItem={menuItem} />
      {menuItem.childItems && menuItem.childItems.nodes.length
        ? <MenuSub subItems={menuItem.childItems.nodes} subMenuOpen={subMenuOpen} openSubMenu={openSubMenu} />
        : null}
    </Box>
  );
};

export default MenuItem;

import React from 'react';
import { Box, IconButton } from '@chakra-ui/core';
import MenuItem from './MenuItem';

const MenuSub = ({ subItems, subMenuOpen, openSubMenu }) => {
  console.log(subItems);


  return (
    <>
      <IconButton
        aria-label="open sub menu"
        icon="add"
        size="xs"
        color="navLink"
        variant="unstyled"
        opacity=".7"
        textAlign="center"
        position={['absolute', 'absolute', 'static']}
        right="0"
        height="55px"
        width="55px"
        ml={['0', '0', 1]}
        display={['block', 'block', 'none']}
        top="0"
        z-index="9"
        onClick={() => (subMenuOpen ? openSubMenu(false) : openSubMenu(true))}
      />
      <Box
        as="ul"
        bg="headerBg"
        m="0"
        ml={[2, 2, '0']}
        mt={[subMenuOpen ? 2 : '0', subMenuOpen ? 2 : '0', '0']}
        p={['0', '0', 2]}
        pr={[1, 1, 3]}
        rounded={3}
        position={['static', 'static', 'absolute']}
        maxHeight={subMenuOpen ? '1000px' : '0'}
        height="auto"
        overflow="hidden"
        top="40px"
        left="-20px"
        listStyleType="none"
        border={['none', 'none', '1px solid rgba(255,255,255,.3)']}
        maxH={subMenuOpen ? '1000px' : '0'}
        minW="150px"
        transform={[
          subMenuOpen ? 'scale(1)' : 'scale(.95)',
          subMenuOpen ? 'scale(1)' : 'scale(.95)',
          'scale(1)',
        ]}
        transition={
          subMenuOpen
            ? 'all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)'
            : 'all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)'
        }
        opacity={subMenuOpen ? '1' : '0'}
      >
        {subItems.map((subItem) => (
          <MenuItem key={subItem.id} menuItem={subItem} menuOpened={false} />
        ))}
      </Box>
    </>
  );
};

export default MenuSub;

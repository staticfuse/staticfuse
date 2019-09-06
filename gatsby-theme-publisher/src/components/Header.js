import React from 'react'
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import {Flex, Box} from '@chakra-ui/core'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <Box bg='gray.800' p={2}>
      <Box maxW='6xl' m='auto'>
      <Flex align='center' justify='space-between'>
      <Logo data={title} />
      <Menu />
      </Flex>
      </Box>
    </Box>
  )
}

export default Header

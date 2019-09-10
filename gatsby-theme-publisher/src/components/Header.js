import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import { Flex, Box } from "@chakra-ui/core"
import SearchBar from "./SearchBar"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <Box bg="gray.800" p={2}>
      <Box maxW="6xl" m="auto">
        <Flex
          alignItems="center"
          justify="space-between"
          className="nav-wrapper"
        >
          <Logo data={title} />
          <Flex alignItems="center">
            <Menu />
            <Box ml={6}><SearchBar /></Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Header

import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import { Flex, Box } from "@chakra-ui/core"
import SearchBar from "./SearchBar"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <Box bg="headerBg" p=".5rem 2rem">
      <Box maxW="6xl" m="auto">
        <Box
          display={["block", "flex"]}
          alignItems="center"
          justify={["inherit", "space-between"]}
          className="nav-wrapper"
        >
          <Menu />
        </Box>
      </Box>
    </Box>
  )
}

export default Header

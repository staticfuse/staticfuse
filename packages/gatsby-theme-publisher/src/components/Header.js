import React from "react"
import Menu from "./Menu"
import { Box } from "@chakra-ui/core"

const Header = () => {

  return (
    <Box bg="headerBg" p=".5rem 2rem" minH="50px">
      <Box maxW="4xl" m="auto">
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
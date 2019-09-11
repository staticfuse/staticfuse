import React from "react"
import { Link } from "gatsby"
import siteLogo from "../images/site-logo.png"
import { Box } from "@chakra-ui/core"

const Logo = ({ data }) => {
  return (
    <Box position={["absolute", "static"]} left="0" right="0" m={["auto","0"]} w="50px">
      <Link
        to="/"
        className="h-10 overflow-hidden block"
        style={{
          overflow: "hidden",
          height: "50px",
          width: "50px",
          display: "block",
          padding: "5px"
        }}
        rel="home"
        itemProp="url"
      >
        <img
          src={siteLogo}
          alt="Site Logo"
          className="site-logo"
          itemProp="logo"
          style={{
            display: "block",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Link>
    </Box>
  )
}

export default Logo

import React from "react"
import { Box } from "@chakra-ui/core"

const HamburgerMenu = ({ menuOpen }) => {
  console.log(menuOpen)
  return (
    <Box
      as="button"
      className="burger-container"
      position="relative"
      display={["inline-block", "inline-block", "none"]}
      height="50px"
      width="50px"
      cursor="pointer"
      transform="rotate(0deg)"
      transition="all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
      outline="none"
    >
      <Box
        className="burger"
        width="18px"
        height="8px"
        position="relative"
        display="block"
        margin="-4px auto 0"
        top="50%"
      >
        <Box
          className="topBar"
          width="100%"
          height="1px"
          display="block"
          position="relative"
          background="#FFF"
          transition={
            menuOpen
              ? "all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
              : "all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
          }
          style={{
            transitionDelay: ".2s",
          }}
          transform={
            menuOpen
              ? "translateY(4px) rotate(45deg)"
              : "translateY(0px) rotate(0deg)"
          }
        ></Box>
        <Box
          className="btmBar"
          width="100%"
          height="1px"
          display="block"
          position="relative"
          background="#FFF"
          transition={
            menuOpen
              ? "all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
              : "all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
          }
          style={{
            transitionDelay: ".2s",
          }}
          transform={
            menuOpen
              ? "translateY(3px) rotate(-45deg)"
              : "translateY(6px) rotate(0deg)"
          }
        ></Box>
      </Box>
    </Box>
  )
}

export default HamburgerMenu

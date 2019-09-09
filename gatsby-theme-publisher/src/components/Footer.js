import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"
import { Box, Button, PseudoBox } from "@chakra-ui/core"

const Footer = () => {
  const { author, twitter } = useSiteMetadata()
  return (
    <Box as="footer" bg="gray.900" p={8} w="100%" className="site-footer">
      <Box maxW="6xl" m="auto" overflow="hidden" color="muted" fontSize="sm">
        <p style={{ float: "left" }}>© 2019 {author} | Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="nofollow">Gatsby</a></p>
        <p style={{ float: "right", display: "flex" }}>
          <Button
            onClick={() => window.open(twitter)}
            leftIcon="at-sign"
            variant="outline"
            outline="none"
            color="gray.300"
            size="xs"
            fontSize="xs"
            _hover={{
              bg:"blue.500",
              color: "white"
            }}
          >
            Twitter
          </Button>
        </p>
      </Box>
    </Box>
  )
}

export default Footer

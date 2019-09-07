import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"
import { Box } from '@chakra-ui/core'

const Footer = () => {
  const { author } = useSiteMetadata()
  return (
    <Box as="footer" bg="gray.900" p={8} w="100%" className="site-footer">
      <Box maxW="6xl" m="auto" overflow="hidden" color="muted" fontSize="sm">
        <p style={{float:'left'}}>
          © 2019 {author} | Built with Gatsby
        </p>
        <p style={{float:'right'}}>
          <a  href="https://twitter.com/scottbolinger">
            Twitter
          </a>{" "}
          <a
            href="https://theproductbusiness.com/podcast"
          >
            Podcast
          </a>
        </p>
      </Box>
    </Box>
  )
}

export default Footer

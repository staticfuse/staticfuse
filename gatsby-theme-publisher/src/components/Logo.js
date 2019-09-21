import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/core"

const Logo = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "site-logo.png"}) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `)
  return (
    <Box position={["absolute", "absolute", "static"]} left="0" right="0" m={["auto", "auto","0"]} w="50px">
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
      { imageData && imageData.file ? 
        <Img
          fixed={imageData.file.childImageSharp.fixed}
          alt="Site Logo"
          className="site-logo"
          itemProp="logo"
          style={{
            display: "block",
            maxWidth: "100%",
            height: "100%",
          }}
        />
        : null }
      </Link>
    </Box>
  )
}

export default Logo

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Box } from '@chakra-ui/core'

const Logo = props => {
  const imageData = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "site-logo.png" }) {
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
    <Box
      className="site-logo"
      position={['absolute', 'absolute', 'static']}
      left="0"
      right="0"
      m={['auto', 'auto', '0']}
      w="50px"
    >
      <div
        style={{
          overflow: 'hidden',
          height: '50px',
          width: '50px',
          display: 'block',
          padding: '1px',
        }}
      >
        {imageData && imageData.file ? (
          <Img
            fixed={imageData.file.childImageSharp.fixed}
            alt="Site Logo"
            itemProp="logo"
            style={{
              display: 'block',
              maxWidth: '100%',
              height: '100%',
            }}
          />
        ) : null}
      </div>
    </Box>
  )
}

export default Logo

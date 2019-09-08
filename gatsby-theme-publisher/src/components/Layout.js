import React from "react"
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core"
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"
import publisherTheme from "../theme/theme"
import { Global } from "@emotion/core"

const Layout = props => (
  <ThemeProvider theme={publisherTheme}>
    <CSSReset />
    <Global
      styles={{
        body: {
          lineHeight: "1.625",
          color: publisherTheme.colors.text,
        },
        p: {
          marginBottom: "1.25rem",
        },
        ".entry-content a": {
          borderBottom: "1px dotted #eee",
          color: publisherTheme.colors.links,
          textDecoration: "none",
        },
        "h1, h2, h3, h4, h5": {
          marginBottom: "1.25rem",
          fontWeight: "400",
          lineHeight: "1.25",
          color: publisherTheme.colors.headings,
        },
        h1: {
          fontSize: "3rem",
        },
        h2: {
          fontSize: "2.25rem",
        },
        h3: {
          fontSize: "1.875rem",
        },
        h4: {
          fontSize: "1.5rem",
        },
        h5: {
          fontSize: "1.25rem",
        },
        "ul, ol": {
          paddingLeft: "1.5rem",
          marginBottom: ".75rem",
        },
        "ul li, ol li": {
          paddingLeft: ".5rem",
          marginBottom: ".5rem",
        },
        ".screen-reader-text": {
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        },
        ".entry-content img.aligncenter, .entry-content .aligncenter img": {
          display: "block",
          margin: "0 auto",
        },
        ".aligncenter": {
          textAlign: "center",
        },
        ".alignleft": {
          float: "left",
          marginRight: "15px",
        },
        ".alignright": {
          float: "right",
          marginLeft: "15px",
        },
      }}
    />
    <Header />
    <Box maxW="5xl" m="0 auto" p="10px" className="site-content">
      {props.children}
    </Box>
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

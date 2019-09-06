import React from "react"
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core"
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"
import publisherTheme from "../theme"
import { Global } from "@emotion/core"

const Layout = props => (
  <ThemeProvider theme={publisherTheme}>
    <CSSReset />
    <Global
      styles={{
        body: {
          lineHeight: "1.625",
        },
        p: {
          marginBottom: "1.25rem",
        },
        "h1, h2, h3, h4, h5": {
          marginBottom: "1.25rem",
          fontWeight: "400",
          lineHeight: "1.25",
        },
        "h1": {
          fontSize: "3rem"
        },
        "h12": {
          fontSize: "2.25rem"
        },
        "h3": {
          fontSize: "1.875rem"
        },
        "h4": {
          fontSize: "1.5rem"
        },
        "h5": {
          fontSize: "1.25rem"
        },
        "ul, ol": {
          paddingLeft: "1.5rem",
          marginBottom: ".75rem",
        },
        "ul li, ol li": {
          paddingLeft: ".5rem",
          marginBottom: ".5rem",
        },
      }}
    />
    <Header />
    <Box maxW="4xl" m="0 auto" p="10px">
      {props.children}
    </Box>
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

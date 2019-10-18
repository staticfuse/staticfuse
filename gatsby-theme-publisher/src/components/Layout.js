import React from "react"
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core"
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"
import publisherTheme from "../theme/theme"
import { Global } from "@emotion/core"
import styles from "../theme/style.css"

const Layout = props => {
  return (
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
          marginBottom: "1rem",
          fontWeight: "400",
          lineHeight: "1.25",
          color: publisherTheme.colors.headings,
        },
        h1: {
          fontSize: "3rem",
          fontWeight: "500"
        },
        h2: {
          fontSize: "2.5rem",
          fontWeight: "500"
        },
        h3: {
          fontSize: "1.875rem",
        },
        h4: {
          fontSize: "1.2rem",
          textTransform: "uppercase"
        },
        h5: {
          fontSize: "1rem",
        },
        "ul, ol": {
          paddingLeft: "1.5rem",
          marginLeft: "1.5rem",
          marginBottom: ".75rem",
        },
        "ul li, ol li": {
          paddingLeft: ".5rem",
          marginBottom: ".5rem",
        },
        "ul ul, ol ol, ul ul ul, ol ol ol": {
          marginLeft: "0",
          marginTop: "10px"
        },
        iframe: {
          width: "100%"
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
        ".entry-content img, .entry-content figure, .entry-content picture": {
          maxWidth: "100%"
        },
        ".entry-content h2": {
          marginTop: "4rem"
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
        ".entry-content img, hr, figure": {
          marginBottom: "15px"
        },
        "figcaption": {
          textAlign: "center",
          fontSize: "12px",
          color: "#999"
        },
        "blockquote": {
          paddingLeft: "15px",
          borderLeft: "4px solid #ccc",
          fontFamily: "Georgia, Times, serif",
          fontSize: "18px",
          fontStyle: "italic",
          opacity: ".8"
        },
        "code, pre": {
          wordBreak: "break-word",
        }
      }}
    />
    <style src={styles} type="text/css"></style>
    <Header />
    <Box maxW={ props.fullWidth ? "100%" : "5xl" } m={ props.fullWidth ? "0" : "1.5rem auto 0 auto" } p={ props.fullWidth ? "0" : "10px" } className="site-content">
      {props.children}
    </Box>
    <Footer />
  </ThemeProvider>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

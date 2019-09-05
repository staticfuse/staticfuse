/** @jsx jsx */
import { jsx, css, Layout as ThemeLayout, Styled } from 'theme-ui'
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import Container from "../elements/Container"

const Layout = props => (
  <Styled.root>
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `16px`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
        },
        a: {
          textDecoration: 'none'
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`,
        },
      })}
    />
    <Header />
    <ThemeLayout sx={{
      padding: '0 15px'
    }}>
      <Container className="site-content">
        {props.children}
      </Container>
    </ThemeLayout>
    <Footer />
  </Styled.root>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

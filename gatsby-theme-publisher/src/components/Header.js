/** @jsx jsx */
import { jsx } from "theme-ui"
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import ThemeHeaderContainer from "../elements/ThemeHeaderContainer"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <ThemeHeaderContainer>
      <Logo data={title} />
      <Menu />
    </ThemeHeaderContainer>
  )
}

export default Header

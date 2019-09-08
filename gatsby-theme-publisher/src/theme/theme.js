import { theme } from "@chakra-ui/core"

const publisherTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: "#2D3748",
    primary: theme.colors.blue,
    muted: "#999",
    headings: "#2D3748",
    links: theme.colors.blue,
    navLink: "#ffffff",
    subMenuBg: "#fafafa",
    subMenuLink: "#2D3748",
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    icons: {
      ...theme.icons,
      // ...customIcons,
    },
  },
}

export default publisherTheme

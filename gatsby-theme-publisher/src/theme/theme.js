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
    headerBg: "#2D3748"
  },
}

export default publisherTheme

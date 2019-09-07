import { theme } from "gatsby-theme-publisher/src/theme/theme"

export default {
  ...theme,
  colors: {
    ...theme.colors,
    gray: {
      900: "#bada55",
      800: "#bada55",
    },
    primary: theme.colors.red,
  },
}

import baseTheme from 'gatsby-theme-publisher/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    // secondary: `#777`
  },
  styles: {
    ...baseTheme.styles,
    header: {
      ...baseTheme.styles.header,
      // backgroundColor: 'primary',
    },
  }
};

import { theme } from "@chakra-ui/core"

// const customIcons = {
//   twitter: {
//     path: <svg data-name="Logo — FIXED" viewBox="0 0 400 400"><path fill="none" d="M0 0h400v400H0z"/><path d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45 51.34 51.34 0 0 0-87.41 46.78A145.62 145.62 0 0 1 92.4 107.81a51.33 51.33 0 0 0 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65a51.31 51.31 0 0 0 41.15 50.28 51.21 51.21 0 0 1-23.16.88 51.35 51.35 0 0 0 47.92 35.62 102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23" fill="#1da1f2"/></svg>,
//     // If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
//     viewBox: "0 0 400 400",
//   },
//   facebook: {
//     path: (
//       <g>
//         <path d="..."/>
//       </g>
//     )
//   }
// };

const publisherTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: theme.colors.blue,
    muted: "#999",
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

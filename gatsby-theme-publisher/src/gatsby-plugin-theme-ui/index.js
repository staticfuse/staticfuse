import { tailwind } from "@theme-ui/presets";

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    text: tailwind.colors.gray[8],
    heading: tailwind.colors.gray[8],
    background: `#fff`,
    primary: tailwind.colors.blue[6],
    secondary: tailwind.colors.gray[4],
    dark: tailwind.colors.gray[9],
    muted: tailwind.colors.gray[6],
    lightGray: tailwind.colors.gray[2]
  },
  breakpoints: [`640px`, `768px`, `1024px`, `1280px`],
  styles: {
    ...tailwind.styles,
    img: {
      display: 'block',
      maxWidth: '100%'
    },
    heading: {
      textDecoration: 'none',
      color: 'text'
    }
  },
  buttons: {
    ...tailwind.buttons,
    secondary: {
      color: `white`,
      bg: `secondary`
    },
    primary: {
      color: `white`,
      bg: `primary`,
    },
  },
};

import { theme } from '@chakra-ui/core';

const publisherTheme = {
  ...theme,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    ...theme.colors,
    text: '#2D3748',
    primary: '#1eb4f3',
    muted: '#999',
    headings: '#1eb4f3',
    links: '#1eb4f3',
    navLink: '#f5ee08',
    headerBg: '#1eb4f3',
    footerBg: theme.colors.gray['900'],
    footerText: theme.colors.gray['400'],
    buttonBg: '#1eb4f3',
    buttonText: '#eee',
    optinText: '#555',
    optinBg: '#EDF2F7',
  },
};

export default publisherTheme;

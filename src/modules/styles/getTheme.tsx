import { Theme, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { FC } from 'react';

export const getTheme = (): Theme => {
  return createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#d4aa63',
        contrastText: '#fff',
      },
      secondary: {
        main: '#7D756A',
        contrastText: '#000',
      },
    },
    typography: {
      fontFamily: ['Vollkorn', 'serif'].join(', '),
      allVariants: { color: '#2e2e2e' },
    },
  });
};

export const AppThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>;
};

export default getTheme;

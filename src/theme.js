import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f6f5f3',
    },
  },
  typography: {
    fontFamily: 'Questrial',
    h4: {
      fontFamily: 'Source Serif Pro',
    },
  },
});

export default theme;

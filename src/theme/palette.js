import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  darkmode: {
    contrastText: white,
    dark: colors.grey[900],
    main: colors.grey[800],
    light: colors.grey[400]
  },
  primary: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[900],
    light: colors.red[400]
  },
  secondary: {
    contrastText: white,
    dark: colors.green[800],
    main: colors.green['A700'],
    light: colors.green[200]
  },
  complementary: {
    contrastText: white,
    dark: colors.yellow[600],
    main: colors.yellow['A700'],
    light: colors.yellow[200]
  },
  offBack: {
    contrastText: colors.blueGrey[900],
    back: '#F4F6F8'
  },
  text: {
    primary: white,
    secondary: colors.grey[700],
    link: colors.blue[600]
  },
  background: {
    default: colors.grey[900],
    paper: colors.grey[900]
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[600]
};

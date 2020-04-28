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
    main: colors.red[800],
    light: colors.red[400]
  },
  secondary: {
    contrastText: white,
    dark: colors.yellow[700],
    main: colors.yellow[600],
    light: colors.yellow[200]
  },
  offBack: {
    contrastText: colors.blueGrey[900],
    back: '#F4F6F8'
  },
  text: {
    primary: white,
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: colors.grey[900],
    paper: colors.grey[900]
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[600]
};

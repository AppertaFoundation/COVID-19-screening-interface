import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});
const main = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: ['Istok Web', 'sans-serif'].join(','),
      subtitle1: {
        color: 'grey'
      }
    },
    overrides: {
      MuiInputBase: { root: { backgroundColor: 'transparent' } },
      MuiOutlinedInput: { root: { borderRadius: 8 } },
      MuiButton: {
        label: {
          [breakpoints.up('sm')]: {
            fontSize: pxToRem(16)
          }
        }
      },
      MuiTypography: {
        body2: {
          // fontSize: pxToRem(24),
          [breakpoints.up('sm')]: {
            fontSize: pxToRem(20)
          }
        },
        h6: {
          // fontSize: pxToRem(24),
          [breakpoints.up('sm')]: {
            fontSize: pxToRem(24)
          }
        },
        h5: {
          // fontSize: pxToRem(24),
          [breakpoints.up('sm')]: {
            fontSize: pxToRem(26)
          }
        },
        caption: {
          fontSize: pxToRem(10),
          [breakpoints.up('sm')]: {
            fontSize: pxToRem(12)
          }
        }
      }
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#000'
    }
  })
);

const login = {
  ...main,
  ...createMuiTheme({
    palette: {
      background: {
        default: '#9FC9D9'
      }
    }
  })
};

export default {
  main,
  login
};

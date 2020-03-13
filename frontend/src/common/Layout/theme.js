import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily: ['Istok Web', 'sans-serif'].join(','),
    subtitle1: {
      color: 'grey'
    }
  },
  overrides: {
    MuiInputBase: { root: { backgroundColor: '#fff' } },
    MuiOutlinedInput: { root: { borderRadius: 8 } }
  }
});

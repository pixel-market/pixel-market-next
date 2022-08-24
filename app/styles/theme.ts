import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export enum E_MediaQuery {
  xl = '(max-width: 1140px)',
  lg = '(max-width: 960px)',
  md = '(max-width: 720px)',
  sm = '(max-width: 540px)',
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#24252c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme

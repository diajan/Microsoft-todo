import { createTheme } from '@mui/material/styles'
import c1 from './colors/color1'
import c2 from './colors/color2'


function CreateColorTheme (color) {
  return  createTheme({
    palette: {
      primary: {
        main: color.primary
      },
      secondary: {
        main: color.secondary
      },
      warning: {
        main: color.warning
      },
      info: {
        main: color.info
      },
      public: {
        light: color.light
      }
    }
  })
}

export const color1 = new CreateColorTheme(c1)

export const color2 = new CreateColorTheme(c2)

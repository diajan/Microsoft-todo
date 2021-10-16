import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Menu from 'components/generic/Menu'
import Main from 'components/generic/Main'
import {ThemeProvider} from '@mui/styles'
import {theme} from 'tools/themes/provider'

import 'assets/css/main.css'
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <Grid container>
        <Grid item md={2.5}>
          <Box sx={{display:{xs:'none',md:'block'}}}>
            <Menu />
          </Box>
        </Grid>
        <Grid item xs sm md>
          <Main />
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default App

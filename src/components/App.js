import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Menu from 'components/generic/Menu'
import Main from 'components/generic/Main'
import { ThemeProvider } from '@mui/styles'
import { color1, color2 } from 'tools/themes/provider'

import 'assets/css/main.css'

function App() {
  return (
    <ThemeProvider theme={color1}>
      <Box>
        <Grid container direction={{ xs: 'column', md: 'row' }} wrap='nowrap'>
          <Menu />
          <Grid item xs md>
            <Main/>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App

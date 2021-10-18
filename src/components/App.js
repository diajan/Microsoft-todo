import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Menu from 'components/generic/Menu'
import Main from 'components/generic/Main'
import { ThemeProvider } from '@mui/styles'
import { color1, color2 } from 'tools/themes/provider'

import 'assets/css/main.css'

function App() {
  return (
    <Router>
      <ThemeProvider theme={color2}>
        <Box>
          <Grid container direction={{ xs: 'column', md: 'row' }} wrap='nowrap'>
            <Menu />
            <Grid item xs md>
              <Switch>
                <Route path='/important' exact component={Main} />
                <Route path='/tasks' exact component={Main} />
                <Route path='/planned' exact component={Main} />
                <Route path='/'  component={Main} />
              </Switch>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App

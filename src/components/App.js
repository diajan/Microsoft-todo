import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Menu from 'components/generic/Menu'
import Main from 'components/generic/Main'
import { ThemeProvider } from '@mui/styles'
import { color1 } from 'tools/themes/provider'
import { useSelector } from 'react-redux'
import 'assets/css/main.css'

function App() {
  const currentColor = useSelector(s => s.currentColor)

  return (
    <Router>
      <ThemeProvider theme={currentColor ?? color1}>
        <Box>
          <Grid container direction={{ xs: 'column', md: 'row' }} wrap='nowrap'>
            <Menu />
            <Grid item xs md>
              <Switch>
                <Route
                  path='/important'
                  exact
                  render={() => <Main uri='important' />}
                />
                <Route
                  path='/tasks'
                  exact
                  render={() => <Main uri='tasks' />}
                />
                <Route
                  path='/planned'
                  exact
                  render={() => <Main uri='planned' />}
                />
                <Route path='/' render={() => <Main uri='myday' />} />
              </Switch>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App

import { makeStyles } from '@mui/styles'
import { padding } from '@mui/system'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white.light,
    color: 'white',
    maxWidth: 'auto',
    height: '100vh'
  },
  list: {
    color: theme.palette.grey[700],
    padding: '8px 0 8px 5px'
    //  borderLeft: `2px solid ${theme.palette.success.main}`
  }
}))

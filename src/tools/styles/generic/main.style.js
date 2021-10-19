import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: 'auto',
    height: '100vh',
    backgroundColor: palette.info.main,
  },
  bg: {
    position: 'absolute',
    maxWidth: 'auto',
    backgroundColor: palette.info.main,
    minHeight: '100vh',
    borderRadius: '0',
  },
  container: {
    position: 'relative',
    height: 'inherit',
  },
  title: {
    position: 'relative',
    color: palette.common.white,
  },
}))

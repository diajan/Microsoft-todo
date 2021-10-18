import { makeStyles } from '@mui/styles'

const drawerWidth = 240

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.public.light,
    color: palette.secondary.main,
    width: drawerWidth,
    height: '100vh',
  },

  list: {
    color: palette.grey[800],
    padding: '8px 0 8px 5px',
    '& a': {
      color: palette.grey[800],
      textDecoration:'none',
      padding: '8px 0 8px 5px',
    },
    '& svg': {
      color: palette.info.main,
    },
    '& .list-item-button:hover': {
      borderLeft: `2px solid ${palette.warning.main}`,
    },
  },

  hamburgerMenu: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    zIndex: 1,
    '& button': {
      padding: '10px 0',
      '& svg': {
        fontSize: '2.5rem',
      },
    },
  },
  menu: {
    color: palette.warning.main,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: palette.public.light,
  },

  user: {
    '& .list-item-button:hover': {
      borderLeft: `none`,
    },
  },
  search: {
    color: palette.grey[600],
    fontSize: '1.5rem',
    marginRight: '10px',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.6',
    },
  },
}))

import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(({ palette }) => ({
  list: {
    color: palette.grey[800],
    padding: '8px 0 8px 5px',
    '& svg': {
      color: palette.info.main,
    },
    '& .list-item-button:hover': {
      borderLeft: `2px solid ${palette.warning.main}`,
    },
  },
  user: {
    '& .list-item-button:hover': {
      backgroundColor: 'unset',
      borderLeft: 'none',
    },
  },
}))

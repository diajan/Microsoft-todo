import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '-webkit-fill-available',
    margin: '8px 0',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: palette.common.white,
    color: palette.grey[800],

    '&:hover': {
      backgroundColor: palette.public.light,
    },

    '& #success:hover': {
      color: palette.success.main,
    },
    '& #unsuccess:hover': {
      color: palette.error.dark,
    },
    '& #error:hover': {
      color: palette.error.main,
    },
    '& #info': {
      marginRight: '5px',
      '&:hover': {
        color: palette.info.main,
      },
    },
  },
  container: {
    display: 'flex',
    alignContent: 'center',
  },
}))

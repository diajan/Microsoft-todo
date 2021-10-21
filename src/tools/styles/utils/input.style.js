import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(({ palette }) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: palette.primary.main,

      '& svg, input': {
        color: palette.public.light,
      },
    },
  }
})

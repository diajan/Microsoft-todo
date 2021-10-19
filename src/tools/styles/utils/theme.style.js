import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(({palette})=>({
  root: {
    margin:'4rem 0 0 -1rem'
  },
  btn:{
    position:'absolute',
    top:'30px',
    right:'20px',

    '& svg':{
      color:palette.public.light,
      fontSize:'2.5rem'
    }
  }
}))
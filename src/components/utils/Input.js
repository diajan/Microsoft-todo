import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { useStyles } from 'tools/styles/utils/input.style'

export default function Input({placeholder}) {

  const { root } = useStyles()
  return (
    <Paper
      className={root}
      sx={{
        transform: { xs: 'translateY(72vh)', md: 'translateY(75vh)' },
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label='menu'>
        <CircleOutlinedIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeholder} />
    </Paper>
  )
}

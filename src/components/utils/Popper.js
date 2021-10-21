import { useState } from 'react'
import MUIPopper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Fab from '@mui/material/Fab'
import { styled } from '@mui/system'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Button = styled(Fab)({
  height: '35px',
})

export default function Popper({ children }) {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = e => {
    e.type !== 'blur' && setAnchorEl(e.currentTarget)
    setOpen(s => !s)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <div>
      <Button
        variant='extended'
        aria-describedby={id}
        type='button'
        onClick={handleClick}
      >
        {open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
        complete
      </Button>
      <MUIPopper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {children}
          </Fade>
        )}
      </MUIPopper>
    </div>
  )
}

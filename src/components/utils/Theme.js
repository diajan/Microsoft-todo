import { useState, useEffect } from 'react'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import { useDispatch } from 'react-redux'
import { useStyles } from 'tools/styles/utils/theme.style'
import { setColors, setCurrentColor } from 'redux/actions/colors'
import * as colorsTheme from 'tools/themes/provider'

export default function Theme() {
  const dispatch = useDispatch()
  const { root, btn } = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    dispatch(setColors(colorsTheme))
  }, [])

  const handleChangeColor = color => {
    dispatch(setCurrentColor(colorsTheme[color]))
  }

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Button
        className={btn}
        aria-describedby={id}
        variant='text'
        onClick={handleClick}
      >
        <ColorLensRoundedIcon />
      </Button>
      <Popover
        className={root}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Stack direction='row' spacing={1} sx={{ p: 1 }}>
          {Object.keys(colorsTheme).map(color => (
            <Button key='1' onClick={() => handleChangeColor(color)}>
              <Avatar
                sx={{ bgcolor: colorsTheme[color].palette.primary.main }}
                children=''
              />
            </Button>
          ))}
        </Stack>
      </Popover>
    </>
  )
}

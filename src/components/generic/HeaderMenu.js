import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import ListItem from 'components/utils/ListItem'
import Heaedr from './Header'

const drawerWidth = 240

const openedMixin = theme => ({
  width: drawerWidth,
  
  overflowX: 'hidden'
})

const closedMixin = theme => ({
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

export default function MiniDrawer() {
  const [open, setOpen] = useState(false)
  
  const handleDrawerToggle = () => {
    setOpen(!open)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Heaedr open={open} toggle={handleDrawerToggle} />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem
            title='My Day'
            icon={<WbSunnyIcon />}
            key='1'
            button
            selected
          />
        </List>
      </Drawer>
      {/* <Box
        style={{ backgroundColor: 'red',marginTop:'30px' }}
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />

        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          consectetur quidem maiores saepe deserunt. Explicabo, fuga cupiditate
          facilis facere harum nostrum velit ad hic eos nisi quisquam accusamus
          iusto perferendis!
        </h2>
      </Box> */}
    </Box>
  )
}

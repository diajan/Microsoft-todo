import React from 'react'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const drawerWidth = 240

const Appbar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
}))

export default function Heaedr({ open, toggle }) {
  const theme = useTheme()

  return (
    <Appbar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={toggle}
          edge='start'
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          To Do List
        </Typography>
      </Toolbar>
    </Appbar>
  )
}

// import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import Paper from '@mui/material/Paper';
// import Collapse from '@mui/material/Collapse';
// import FormControlLabel from '@mui/material/FormControlLabel';

// const icon = (
//   <Paper sx={{ m: 1 }} elevation={4}>
//     <Box component="svg" sx={{ width: 100, height: 100 }}>
//       <Box
//         component="polygon"
//         sx={{
//           fill: (theme) => theme.palette.common.white,
//           stroke: (theme) => theme.palette.divider,
//           strokeWidth: 1,
//         }}
//         points="0,100 50,00, 100,100"
//       />
//     </Box>
//   </Paper>
// );

// export default function SimpleCollapse() {
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };

//   return (
//     <Box sx={{ height: 300 }}>
//       <FormControlLabel
//         control={<Switch checked={checked} onChange={handleChange} />}
//         label="Show"
//       />
//       <Box
//         sx={{
//           '& > :not(style)': {
//             display: 'flex',
//             justifyContent: 'space-around',
//             height: 120,
//             width: 250,
//           },
//         }}
//       >
//         <div>
//           <Collapse in={checked}>{icon}</Collapse>
//           <Collapse in={checked} collapsedSize={40}>
//             {icon}
//           </Collapse>
//         </div>
//         <div>
//           <Box sx={{ width: '50%' }}>
//             <Collapse orientation="horizontal" in={checked}>
//               {icon}
//             </Collapse>
//           </Box>
//           <Box sx={{ width: '50%' }}>
//             <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
//               {icon}
//             </Collapse>
//           </Box>
//         </div>
//       </Box>
//     </Box>
//   );
// }

import WbSunnyIcon from '@mui/icons-material/WbSunny'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import HomeIcon from '@mui/icons-material/Home'

const items = [
  { title: 'My day', icon: <WbSunnyIcon />, key: 1, link: '/' },
  {
    title: 'Important',
    icon: <StarBorderPurple500Icon />,
    key: 2,
    link: '/important',
  },
  { title: 'Planned', icon: <CalendarTodayIcon />, key: 3, link: '/planned' },
  { title: 'Tasks', icon: <HomeIcon />, key: 4, link: '/tasks' },
]

export default items

import Avatar from '@mui/material/Avatar'

const fullname = 'Mahdi Aghajan'
const link = 'github.com/diajan'

const user = {
  avatar: (
    <Avatar sx={{ bgcolor: theme => theme.palette.grey[800] }}>
      {fullname[0]}
    </Avatar>
  ),
  fullname,
  link
}

export default user

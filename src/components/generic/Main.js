import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Input from 'components/utils/Input'
import Theme from 'components/utils/Theme'
import { useStyles } from 'tools/styles/generic/main.style'
import { getNowDate, capitalize } from 'tools/other/functions'
import bg from 'tools/themes/background'
import Todo from 'components/utils/Todo'
import { useForceUpdate } from 'tools/other/customHook'
import Popper from 'components/utils/Popper'

export default function Main({ uri }) {
  const forceUpdate = useForceUpdate()
  const classes = useStyles()
  const selectMenu = useSelector(s => s.selectMenu)

  const todos = useSelector(s => s.todos.filter(todo => todo.uri === uri))
  const done = todos?.filter(todo => todo.done)
  const undone = todos?.filter(todo => !todo.done)

  return (
    <Box className={classes.root} component='main'>
      <Box
        className={classes.container}
        sx={{
          padding: { xs: '5rem 2rem 0 ', md: '2rem 2rem 0 ' },
          backgroundImage: `url(${bg[`bg${selectMenu}`]})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <Box className={classes.title}>
          <Typography variant='h4' component='div' children={capitalize(uri)} />
          <Typography
            variant='subtitle1'
            gutterBottom
            component='div'
            children={getNowDate()}
          />
        </Box>

        <Theme />

        <div style={{ height: '55vh', overflowY: 'auto', overflowX: 'hidden' }}>
          {undone.map(({ title, id }) => (
            <Todo key={id} renderParent={forceUpdate} title={title} id={id} />
          ))}
        </div>

        {!!done.length && (
          <Popper>
            <div
              style={{ height: '20vh', overflowY: 'auto', overflowX: 'hidden' }}
            >
              {done.map(({ title, id }) => (
                <Todo
                  key={id}
                  renderParent={forceUpdate}
                  title={title}
                  id={id}
                  noEdit
                />
              ))}
            </div>
          </Popper>
        )}

        <Input renderParent={forceUpdate} placeholder='Add Todo' />
      </Box>
    </Box>
  )
}

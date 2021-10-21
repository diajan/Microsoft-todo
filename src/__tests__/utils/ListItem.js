import { render, screen } from '@testing-library/react'
import { setSelectMenu } from 'redux/actions/menu'
import ListItem from 'components/utils/ListItem'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('List Item Test', () => {
  let store

  const props = {
    title: 'title',
    subtitle: 'subtitle',
    icon: 'icon',
    keys: '1',
  }

  beforeEach(() => {
    store = mockStore({})
    store.dispatch = jest.fn()
  })

  test('render and diaspatch test', () => {
    render(
      <Provider store={store}>
        <ListItem {...props} />
      </Provider>
    )

    const item = screen.getByRole('button')
    item.focus

    store.dispatch(setSelectMenu(props.keys))

    expect(store.dispatch).toHaveBeenCalledTimes(1)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'SELECT_MENU',
      payload: '1',
    })
  })
})

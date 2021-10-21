import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { editTodo } from 'redux/actions/todo'
import EditableTexts from 'components/utils/EditableText'

const mockStore = configureStore([])

describe('Editable Text Component', () => {
  let store

  const props = {
    title: 'test',
    id: '1',
  }

  beforeEach(() => {
    store = mockStore({})
    store.dispatch = jest.fn()
  })

  test('render and Action funnction Test', () => {
    const newVal = 'test char'

    render(
      <Provider store={store}>
        <EditableTexts title='test' id='1' />
      </Provider>
    )

    const btn = screen.getByTestId('edit-btn')
    userEvent.click(btn)

    const input = screen.getByTestId('input')
    userEvent.type(input, newVal)

    const div = screen.getByTestId('parent')
    userEvent.click(div)

    store.dispatch(editTodo(props.id, newVal))

    expect(store.dispatch).toHaveBeenCalledTimes(1)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'EDIT_TODO',
      payload: {
        newVal: newVal,
        id: props.id,
      },
    })
  })
})

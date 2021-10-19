import { render, screen } from '@testing-library/react'
import ListItem from 'components/utils/ListItem'

describe('List Item Test', () => {
  test('render test', () => {
    const { getByText } = render(
      <ListItem
        title={'title'}
        icon={'icon'}
        keys={'key'}
        link={'link'}
      />
    )

    getByText(/title/i)
    getByText(/icon/i)
  })
})

import React from 'react'
import { render } from '@testing-library/react'

import Note from '../note'

const note = {
  title: 'note title',
  content: 'note content',
  color: '#868686'
}

test('should render a note component', () => {
  const { container } = render(<Note note={note} />)
  expect(container.firstChild).toMatchSnapshot()
})

test('should not crash without data', () => {
  const { container } = render(<Note note={undefined} />)
  expect(container.firstChild).toMatchSnapshot()
})

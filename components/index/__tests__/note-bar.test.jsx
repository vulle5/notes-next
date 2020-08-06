import React from 'react'
import { render } from '@testing-library/react'

import NoteBar from '../note-bar'

test('should render a note-bar component', () => {
  const { container } = render(<NoteBar />)
  expect(container.firstChild).toMatchSnapshot()
})

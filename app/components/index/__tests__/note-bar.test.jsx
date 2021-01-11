import React from 'react'
import { render } from 'testing/testing-library-wrapper'

import NoteBar from '../note-bar'

test('should render a note-bar component', () => {
  const { container } = render(<NoteBar />)
  expect(container.firstChild).toMatchSnapshot()
})

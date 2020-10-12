import React from 'react'
import { RecoilRoot } from 'recoil'
import { render } from '@testing-library/react'

import NoteBar from '../note-bar'

let component

beforeEach(() => {
  component = <RecoilRoot><NoteBar /></RecoilRoot>
})

test('should render a note-bar component', () => {
  const { container } = render(component)
  expect(container.firstChild).toMatchSnapshot()
})

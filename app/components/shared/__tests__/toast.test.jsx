import React from 'react'
import { render } from '@testing-library/react'

import Toast from '../toast'

test('should render button with text', () => {
  const { container } = render(<Toast />)
  expect(container.firstChild).toMatchSnapshot()
})

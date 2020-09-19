import React from 'react'
import { render } from '@testing-library/react'

import Button from '../button'

test('should render button with text', () => {
  const { container } = render(<Button>test text</Button>)
  expect(container.firstChild).toMatchSnapshot()
})

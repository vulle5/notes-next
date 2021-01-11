import React from 'react'
import { render } from '@testing-library/react'

import ResizableTextarea from '../resizable-textarea'

test('renders correctly', () => {
  const { container } = render(<ResizableTextarea />)
  expect(container.firstChild).toMatchSnapshot()
})

test('has correct default props', () => {
  expect(ResizableTextarea.defaultProps).toBeDefined()
  expect(ResizableTextarea.defaultProps).toStrictEqual({
    minRows: 5,
    maxRows: 10,
    textareaRef: null
  })
})

describe('onChange', () => {
  // TODO: Implement tests
})

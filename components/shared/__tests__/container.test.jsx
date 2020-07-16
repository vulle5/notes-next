import React from 'react'
import { render } from '@testing-library/react'

import Container from '../container'

const element = (
  <Container>
    <p>Hello World!</p>
  </Container>
)

test('should render children', () => {
  const { container } = render(element)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="container"
    >
      <p>
        Hello World!
      </p>
    </div>
  `)
})

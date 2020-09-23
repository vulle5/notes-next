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
    <main
      class="jsx-1947188201 container"
    >
      <p>
        Hello World!
      </p>
    </main>
  `)
})

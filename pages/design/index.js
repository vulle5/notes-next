import React from 'react'
import Link from 'next/link'

import Button from '$shared/button'
import TextInput from '$shared/text-input'
import Container from '$shared/container'

const Design = () => (
  <Container>
    <h1>Quick brown fox jumped over the fence</h1>
    <h2>Quick brown fox jumped over the fence</h2>
    <h3>Quick brown fox jumped over the fence</h3>
    <h4>Quick brown fox jumped over the fence</h4>
    <h5>Quick brown fox jumped over the fence</h5>
    <h6>Quick brown fox jumped over the fence</h6>
    <TextInput id="email" name="email" label="Sähköposti" type="email" />
    <TextInput id="password" name="password" label="Salasana" type="password" />
    <Link href="/">Rekisteröidy</Link>
    <Button>Kirjaudu sisään</Button>
  </Container>
)

export default Design

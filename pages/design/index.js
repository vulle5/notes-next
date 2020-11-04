import React from 'react'
import Link from 'next/link'

import Button from 'components/shared/button'
import TextInput from 'components/shared/text-input'
import Container from 'components/shared/container'
import Card from 'components/shared/card'

const Design = () => (
  <Container>
    <h1>Quick brown fox jumped over the fence</h1>
    <h2>Quick brown fox jumped over the fence</h2>
    <h3>Quick brown fox jumped over the fence</h3>
    <h4>Quick brown fox jumped over the fence</h4>
    <h5>Quick brown fox jumped over the fence</h5>
    <h6>Quick brown fox jumped over the fence</h6>
    <TextInput id="email" name="email" label="Sähköposti" type="email" stretch />
    <TextInput id="password" name="password" label="Salasana" type="password" />
    <br />
    <Link href="/"><a href="/">Rekisteröidy</a></Link>
    <Button>Kirjaudu sisään</Button>
    <h4 className="primary-text">Quick brown fox jumped over the fence</h4>
    <h4 className="secondary-text">Quick brown fox jumped over the fence</h4>
    <br />
    <Card containerStyles={{ display: 'inline-flex', padding: 16 }}><h4>Some text inside a card</h4></Card>
  </Container>
)

export default Design

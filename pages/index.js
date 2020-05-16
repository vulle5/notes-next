import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setUpIcons } from '../styles/icons'
import Container from '../components/container'
import Button from '../components/button'

export default function Home() {
  setUpIcons()

  return (
    <Container>
      <Head>
        <title>Notes-Next</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1>Quick brown fox jumped over the fence</h1>
      <h2>Quick brown fox jumped over the fence</h2>
      <h3>Quick brown fox jumped over the fence</h3>
      <h4>Quick brown fox jumped over the fence</h4>
      <p>Quick brown fox jumped over the fence</p>
      <FontAwesomeIcon icon="check-square" height={30} />
      <FontAwesomeIcon icon="coffee" height={30} />
      <Button text="Test button" />
    </Container>
  )
}

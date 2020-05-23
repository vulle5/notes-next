import Head from 'next/head'

import { setUpIcons } from '../styles/icons'
import Container from '../components/shared/container'
import NotesList from '../components/index/notes-list'

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
      <NotesList />
    </Container>
  )
}

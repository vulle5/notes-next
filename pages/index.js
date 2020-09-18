import Head from 'next/head'

import NoteBar from 'components/index/note-bar'
import LogoutButton from 'components/index/logout-button'
import NotesList from 'components/index/notes-list'
import Container from 'components/shared/container'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Notes-Next</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/api/notes" as="fetch" crossOrigin="anonymous" />
      </Head>
      <h1 className="title">Quick brown fox jumped over the fence</h1>
      <LogoutButton />
      <NoteBar />
      <NotesList />
      <style jsx>{`
        .title {
          text-align: center;
          flex-grow: 1;
        }
      `}
      </style>
    </Container>
  )
}

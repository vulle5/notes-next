import Head from 'next/head'

import Container from 'app/components/shared/container'
import LogoutButton from 'app/components/index/logout-button'
import NoteBar from 'app/components/index/note-bar'
import NotesList from 'app/components/index/notes-list'
import IndexModal from 'app/components/index/index-modal'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Notes-Next</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/api/notes" as="fetch" crossOrigin="anonymous" />
      </Head>
      <LogoutButton />
      <NoteBar />
      <NotesList />
      <IndexModal />
    </Container>
  )
}

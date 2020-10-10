import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from 'components/shared/container'
import LogoutButton from 'components/index/logout-button'
import NoteBar from 'components/index/note-bar'
import NoteForm from 'components/index/note-form'
import NotesList from 'components/index/notes-list'
import Modal from 'components/shared/modal'
import Card from 'components/shared/card'

export default function Home() {
  const router = useRouter()
  const { noteId } = router.query

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
      <Modal
        isOpen={!!noteId}
        onRequestClose={() => router.push('/')}
      >
        <Card containerStyles={{ padding: '1rem' }} shadow="none">
          <NoteForm />
        </Card>
      </Modal>
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

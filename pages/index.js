import Head from 'next/head'
import { SWRConfig } from 'swr'

// Options
import getSWROptions from 'options/useSWR'

// Components
import NoteBar from 'components/index/note-bar'
import LogoutButton from 'components/index/logout-button'
import NotesList from 'components/index/notes-list'
import Container from 'components/shared/container'
import loadIcons from '../styles/icons'

export default function Home() {
  setUp()

  return (
    <SWRConfig
      value={getSWROptions()}
    >
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
    </SWRConfig>
  )
}

function setUp() {
  loadIcons()
}

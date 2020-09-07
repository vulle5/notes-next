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
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="preload" href="/api/notes" as="fetch" crossOrigin="anonymous" />
        </Head>
        <div className="f-center">
          <h1 className="title">Quick brown fox jumped over the fence</h1>
          <LogoutButton />
        </div>
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

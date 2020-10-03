import React from 'react'
import { useRouter } from 'next/router'

import Container from 'components/shared/container'

const Note = () => {
  const router = useRouter()
  const { noteId } = router.query

  // TODO:
  // 1: Local state is the best way to show the single note
  // 2: Show note in modal if clicked in index
  // 3: If page is reloaded show new page where
  // there is a link to all notes (reuse form)
  // 4: Think about updating the value with useSwr

  return (
    <Container>
      <div>{noteId}</div>
    </Container>
  )
}

export default Note

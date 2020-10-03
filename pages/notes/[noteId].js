import React from 'react'
import { useRouter } from 'next/router'

import Container from 'components/shared/container'

const Note = () => {
  const router = useRouter()
  const { noteId } = router.query

  // TODO:
  // 3: If page is reloaded show new page where
  // there is a link to all notes (reuse form)
  // 4: Think about updating the value with useSwr
  // 5: Styling and final touches

  return (
    <Container>
      <div>{noteId}</div>
    </Container>
  )
}

export default Note

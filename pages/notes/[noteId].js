import React from 'react'
import { useRouter } from 'next/router'

import Container from 'components/shared/container'

const Note = () => {
  const router = useRouter()
  const { noteId } = router.query

  // TODO: Implement page

  return (
    <Container>
      <div>{noteId}</div>
    </Container>
  )
}

export default Note

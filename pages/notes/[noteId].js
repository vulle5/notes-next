import React from 'react'
import { useRouter } from 'next/router'

import useNotes from 'hooks/useNotes'

const Note = () => {
  const router = useRouter()
  const { noteId } = router.query
  const { data } = useNotes({ revalidateOnMount: false })

  // TODO: If below does not exist fetch single note from the server
  console.log(data[noteId])

  return (
    <div>
      {noteId}
    </div>
  )
}

export default Note

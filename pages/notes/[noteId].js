import React from 'react'
import { useRouter } from 'next/router'

const Note = () => {
  const router = useRouter()
  const { noteId } = router.query

  // TODO:
  // 2: Show note in modal if clicked in index
  // 3: If page is reloaded show new page where
  // there is a link to all notes (reuse form)
  // 4: Think about updating the value with useSwr

  return (
    <div>
      {noteId}
    </div>
  )
}

export default Note

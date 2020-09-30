import React from 'react'
import { useRouter } from 'next/router'

import useNotes from 'hooks/useNotes'

const Note = () => {
  const router = useRouter()
  const { noteId } = router.query
  const { data } = useNotes({ revalidateOnMount: false })

  // TODO:
  // 1: Revert back to array from server
  // 2: Show note in modal if clicked in index
  // 3: If page is reloaded show new page where
  // there is a link to all notes (reuse form)
  // 4: Think about updating the value with useSwr
  console.log(data[noteId])

  return (
    <div>
      {noteId}
    </div>
  )
}

export default Note

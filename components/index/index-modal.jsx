import React from 'react'
import { useRouter } from 'next/router'

import NoteForm from 'components/index/note-form'
import Modal from 'components/shared/modal'

const IndexModal = () => {
  const router = useRouter()
  const { noteId } = router.query

  // TODO: Make onRequestClose method that submits the form
  return (
    <Modal
      isOpen={!!noteId}
      onRequestClose={() => router.push('/')}
      modalStyles={{ content: { maxWidth: 500 }, overlay: { padding: '1rem' } }}
    >
      <NoteForm updateNote />
    </Modal>
  )
}

export default IndexModal

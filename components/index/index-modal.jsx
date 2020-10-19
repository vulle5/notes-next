import React from 'react'
import { useRouter } from 'next/router'

import NoteForm from 'components/index/note-form'
import Modal from 'components/shared/modal'
import Card from 'components/shared/card'

const IndexModal = () => {
  const router = useRouter()
  const { noteId } = router.query

  return (
    <Modal
      isOpen={!!noteId}
      onRequestClose={() => router.push('/')}
      modalStyles={{ content: { maxWidth: 500 }, overlay: { padding: '1rem' } }}
    >
      <Card containerStyles={{ padding: '1rem' }} shadow="none">
        <NoteForm updateNote />
      </Card>
    </Modal>
  )
}

export default IndexModal

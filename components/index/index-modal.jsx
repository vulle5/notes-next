import React, { useRef } from 'react'
import { useRouter } from 'next/router'

import NoteForm from 'components/index/note-form'
import Modal from 'components/shared/modal'

const IndexModal = () => {
  const formRef = useRef(null)
  const router = useRouter()
  const { noteId } = router.query

  const onRequestClose = () => {
    if (formRef.current) {
      formRef.current?.requestSubmit()
    }
    router.push('/')
  }

  return (
    <Modal
      isOpen={!!noteId}
      onRequestClose={onRequestClose}
      modalStyles={{ content: { maxWidth: 500 }, overlay: { padding: '1rem' } }}
    >
      <NoteForm formRef={formRef} updateNote />
    </Modal>
  )
}

export default IndexModal

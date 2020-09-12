import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import useNotes from 'hooks/useNotes'
import notesService from 'services/api/notes'
import ResizableTextarea from '$shared/resizable-textarea'
import Button from '$shared/button'

const NewNoteForm = ({ showContent, setShowContent }) => {
  const { data, mutate } = useNotes()
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  const onFormSubmit = event => {
    event.preventDefault()

    const newNote = {
      // Set id so react does not warn about keys in an array
      id: data?.length?.toString() ?? '1',
      title: titleRef?.current?.value,
      content: contentRef?.current?.value
    }

    // update the local data immediately, but disable the revalidation
    mutate([newNote, ...data], false)
    // send update to server and trigger a revalidation (refetch)
    mutate(async notes => {
      const note = await notesService.addNote(newNote)
      return [note, ...notes.slice(1)]
    })

    if (titleRef?.current && contentRef?.current) {
      titleRef.current.value = ''
      contentRef.current.value = ''
    }
  }

  const onTextAreaKeyPress = event => {
    if (event.which === 13 && !event.shiftKey) {
      event.target.form.dispatchEvent(new Event('submit', { cancelable: true }))
      // Prevent actual keystroke from being registered
      event.preventDefault()
    }
  }

  return (
    <form className="wrapper" onSubmit={e => onFormSubmit(e)}>
      {showContent && (
        <input
          id="note-title"
          name="note-title"
          placeholder="Title"
          ref={titleRef}
          type="text"
        />
      )}
      <ResizableTextarea
        id="note-content"
        name="note-content"
        maxRows={5}
        minRows={1}
        onFocus={() => setShowContent(true)}
        onKeyPress={e => onTextAreaKeyPress(e)}
        placeholder="Remind me to..."
        textareaRef={contentRef}
        type="text"
      />
      {showContent && <Button type="submit">Create</Button>}
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column
        }
        input {
          all: unset;
          height: 2rem;
          padding: 0px 0.5rem;
        }
      `}
      </style>
    </form>
  )
}

NewNoteForm.propTypes = {
  showContent: PropTypes.bool.isRequired,
  setShowContent: PropTypes.func.isRequired
}

export default NewNoteForm

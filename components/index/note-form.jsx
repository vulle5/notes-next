import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useRecoilValue } from 'recoil'
import { mutate } from 'swr'

import { selectedNote } from 'recoil/note'
import notesService from 'services/api/notes'
import Button from 'components/shared/button'
import ResizableTextarea from 'components/shared/resizable-textarea'

const NoteForm = ({ updateNote, formRef }) => {
  const swrKey = '/api/notes'
  const note = useRecoilValue(selectedNote)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  const onInputKeyPress = event => {
    if (event.which === 13 && updateNote) {
      event.preventDefault()
      contentRef?.current?.focus()
    }
  }

  // Allow new lines with shift + enter
  const onTextareaKeyPress = event => {
    if (event.which === 13 && !event.shiftKey && !updateNote) {
      event.target.form.dispatchEvent(new Event('submit', { cancelable: true }))
      // Prevent actual keystroke from being registered
      event.preventDefault()
    }
  }

  const onCreate = event => {
    event.preventDefault()

    if (
      titleRef.current.value.match(/^ *$/)
      && contentRef.current.value.match(/^ *$/)
    ) {
      return
    }

    const newNote = {
      id: Date.now().toString(),
      title: titleRef.current?.value,
      content: contentRef.current?.value
    }
    // update the local data immediately, but disable the revalidation
    mutate(swrKey, notes => [newNote, ...notes], false)
    // send update to server and trigger a revalidation (refetch)
    mutate(swrKey, async notes => {
      const validatedNote = await notesService.addNote(newNote)
      return [validatedNote, ...notes]
    }, false)

    if (titleRef.current && contentRef.current) {
      titleRef.current.value = ''
      contentRef.current.value = ''
    }
  }

  const onUpdate = event => {
    event.preventDefault()

    if (
      titleRef.current.value === note.title
      && contentRef.current.value === note.content
    ) {
      return
    }

    const updatedNote = {
      id: note.id,
      title: titleRef.current?.value,
      content: contentRef.current?.value
    }
    mutate(swrKey, notes => (
      notes.map(n => (n.id === note.id ? updatedNote : n))
    ), false)
    mutate(swrKey, async notes => {
      const validatedNote = await notesService.updateNote(updatedNote)
      return notes.map(n => (n.id === note.id ? validatedNote : n))
    }, false)
  }

  return (
    <form
      className="wrapper"
      onSubmit={e => (updateNote ? onUpdate(e) : onCreate(e))}
      ref={formRef}
    >
      <input
        className="title-input"
        defaultValue={updateNote ? note.title : ''}
        id="note-title"
        name="note-title"
        onKeyPress={e => onInputKeyPress(e)}
        placeholder="Title"
        ref={titleRef}
        type="text"
      />
      <ResizableTextarea
        defaultValue={updateNote ? note.content : ''}
        id="note-content"
        name="note-content"
        maxRows={5}
        minRows={1}
        onKeyPress={e => onTextareaKeyPress(e)}
        placeholder="Remind me to..."
        textareaRef={contentRef}
        type="text"
      />
      {!updateNote && <Button type="submit">Add proper title</Button>}
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
        .title-input {
          font-weight: bold;
          font-family: Nunito;
        }
      `}
      </style>
    </form>
  )
}

NoteForm.propTypes = {
  formRef: PropTypes.shape({}),
  updateNote: PropTypes.bool
}

export default NoteForm

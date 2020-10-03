import React, { useRef } from 'react'
import { useRecoilValue } from 'recoil'

import { selectedNote } from 'recoil/note'
import Button from 'components/shared/button'
import ResizableTextarea from 'components/shared/resizable-textarea'

const NoteForm = () => {
  const note = useRecoilValue(selectedNote)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  const onTextAreaKeyPress = event => {
    if (event.which === 13 && !event.shiftKey) {
      event.target.form.dispatchEvent(new Event('submit', { cancelable: true }))
      // Prevent actual keystroke from being registered
      event.preventDefault()
    }
  }

  return (
    <form className="wrapper" onSubmit={e => e.preventDefault()}>
      <input
        className="title-input"
        defaultValue={note.title}
        id="note-title"
        name="note-title"
        placeholder="Title"
        ref={titleRef}
        type="text"
      />
      <ResizableTextarea
        defaultValue={note.content}
        id="note-content"
        name="note-content"
        maxRows={5}
        minRows={1}
        onKeyPress={e => onTextAreaKeyPress(e)}
        placeholder="Remind me to..."
        textareaRef={contentRef}
        type="text"
      />
      <Button type="submit">Create</Button>
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

export default NoteForm

import React from 'react'

import ResizableTextarea from 'components/shared/resizable-textarea'

export default function NoteBar() {
  return (
    <div className="container">
      <input
        id="note-title"
        name="note-title"
        placeholder="Title"
        type="text"
      />
      <ResizableTextarea
        id="note-content"
        name="note-content"
        maxRows={5}
        minRows={2}
        placeholder="Remind me to..."
        type="text"
      />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          margin: auto;
          max-width: 400px;
          border: 1px solid;
          border-radius: 0.5rem;
        }
        input {
          all: unset;
          height: 2rem;
          padding-left: 0.5rem;
          margin-right: 0.5rem;
        }
      `}
      </style>
    </div>
  )
}

import React, { useState } from 'react'

import ResizableTextarea from 'components/shared/resizable-textarea'
import OutsideClickHandler from 'react-outside-click-handler'

export default function NoteBar() {
  const [showTitle, setShowTitle] = useState(false)

  return (
    <div className="container">
      <OutsideClickHandler
        onOutsideClick={() => setShowTitle(false)}
      >
        <div className="wrapper">
          {showTitle && (
            <input
              id="note-title"
              name="note-title"
              placeholder="Title"
              type="text"
            />
          )}
          <ResizableTextarea
            id="note-content"
            name="note-content"
            maxRows={5}
            minRows={1}
            onFocus={() => setShowTitle(true)}
            placeholder="Remind me to..."
            type="text"
          />
        </div>
      </OutsideClickHandler>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          margin: auto;
          max-width: 400px;
          border: 1px solid;
          border-radius: 0.5rem;
        }
        .wrapper {
          display: flex;
          flex-direction: column
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

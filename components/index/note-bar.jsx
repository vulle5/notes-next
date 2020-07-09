import React, { useState } from 'react'

import OutsideClickHandler from 'react-outside-click-handler'
import NewNoteForm from './new-note-form'

const NoteBar = () => {
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="container">
      <OutsideClickHandler
        onOutsideClick={() => setShowContent(false)}
      >
        <NewNoteForm
          showContent={showContent}
          setShowContent={setShowContent}
        />
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
      `}
      </style>
    </div>
  )
}

export default NoteBar

import React from 'react'

import NoteForm from './note-form'

const NoteBar = () => (
  <div className="container">
    <NoteForm />
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

export default NoteBar

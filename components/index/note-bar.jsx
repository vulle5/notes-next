import React from 'react'

export default function NoteBar() {
  return (
    <div className="container">
      <input
        id="note"
        name="note"
        placeholder="Remind me to..."
        type="text"
      />
      <style jsx>{`
        .container {
          display: flex;
          margin: auto;
          max-width: 400px;
          border: 1px solid;
          border-radius: 0.5rem;
        }
        input {
          all: unset;
          height: 2rem;
          width: 100%;
          padding-left: 0.5rem;
        }
      `}</style>
    </div>
  )
}
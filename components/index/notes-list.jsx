import React from 'react'
import useAPI from 'hooks/useAPI'

import Note from './note'

const NotesList = () => {
  const { data: notes, isLoading } = useAPI('notes')

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="container">
      {notes.map(note => <Note key={note.id} note={note} />)}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
        }
      `}
      </style>
    </div>
  )
}

export default NotesList

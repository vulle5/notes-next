import React from 'react'
import useNotes from 'hooks/useNotes'

import Note from './note'

const NotesList = () => {
  const { data: notes, isLoading, isError } = useNotes()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Unexpected error</div>
  if (!notes || !notes.length) return <div>No data</div>

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

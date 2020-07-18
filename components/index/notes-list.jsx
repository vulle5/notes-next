import React from 'react'
import useDate from 'hooks/useData'

import Note from './note'

const NotesList = () => {
  const { data: notes, isLoading, isError } = useDate('notes')

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Unexpected error</div>

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

import React from 'react'
import Link from 'next/link'

import useNotes from 'hooks/useNotes'
import Note from './note'

const NotesList = () => {
  const { data: notes, isLoading, isError } = useNotes()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Unexpected error</div>
  if (!notes || !notes.length) return <div>No data</div>

  return (
    <div className="container">
      {notes.map(note => (
        <Link
          key={note.id}
          href={`/?noteId=${encodeURIComponent(note.id)}`}
          as={`/notes/${encodeURIComponent(note.id)}`}
        >
          <a style={{ textDecoration: 'none' }}><Note note={note} /></a>
        </Link>
      ))}
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

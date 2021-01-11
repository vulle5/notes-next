import React from 'react'
import Link from 'next/link'
import { useSetRecoilState } from 'recoil'

import { selectedNote } from 'app/recoil/note'
import useNotes from 'app/hooks/useNotes'
import Note from './note'

const NotesList = () => {
  const setSelectedNote = useSetRecoilState(selectedNote)
  const { data: notes, isError } = useNotes()

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
          <a
            aria-hidden="true"
            className="link"
            role="link"
            onClick={() => setSelectedNote(note)}
            style={{ textDecoration: 'none' }}
          >
            <Note note={note} />
          </a>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
        }
        .link {
          margin: 0.5rem;
        }
      `}
      </style>
    </div>
  )
}

export default NotesList

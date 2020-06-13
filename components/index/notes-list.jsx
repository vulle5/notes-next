import React from 'react'

import Note from './note'

export default function NotesList() {
  return (
    <div className="container">
      {notes.map(note => <Note key={note.id} note={note} />)}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}

const notes = [
  {
    id: 1,
    title: 'Note title here',
    content: 'Today I need to remember to pick up',
    color: null
  },
  {
    id: 2,
    title: 'Note title here',
    color: '#ff0000'
  },
  {
    id: 3,
    title: 'Note title here',
    content: 'Today I need to remember to pick up',
    color: '#ff0000'
  },
  {
    id: 4,
    content: 'Today I need to remember to pick up',
    color: '#ff0000'
  },
  {
    id: 5,
    title: 'Note title here',
    content: 'Today I need to remember to pick up',
    color: '#ff0000'
  },
  {
    id: 6,
    title: 'Note title here',
    content: 'Today I need to remember to pick up',
    color: '#ff0000'
  },
]

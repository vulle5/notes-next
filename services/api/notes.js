// TODO: Reference /api/notes
const url = 'http://localhost:3000/api/notes'

const addNote = async note => {
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  }).then(res => res.json())

  return data
}

const updateNote = async note => {
  const data = await fetch(`${url}/${note.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  }).then(res => res.json())

  return data
}

export default { addNote, updateNote }

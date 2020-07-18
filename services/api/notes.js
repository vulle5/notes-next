// TODO: Reference /api/notes
const url = 'http://localhost:3000/api/notes'

const addNote = async note => {
  const data = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(note)
  }).then(res => res.json())

  return data
}

export default { addNote }

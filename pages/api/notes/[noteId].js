import firestore from 'services/firestore'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'DELETE':
      await destroy(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

const destroy = async (req, res) => {
  const { query } = req

  try {
    await firestore.collection('notes').doc(query.noteId).delete()
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}

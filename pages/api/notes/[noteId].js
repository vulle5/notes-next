import firestore from 'services/firestore'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await show(req, res)
      break
    case 'DELETE':
      await destroy(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

const show = async (req, res) => {
  const { query } = req

  try {
    const doc = await firestore.collection('notes').doc(query.noteId).get()
    if (doc.exists) {
      const { createdAt, ...rest } = doc.data()
      res.json({ id: doc.id, createdAt: createdAt.toDate(), ...rest })
    } else {
      res.status(404).json({ message: 'Note does not exist' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
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

import firestore from 'services/firestore'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await index(req, res)
      break
    case 'POST':
      await create(req, res)
      break
    default:
      res.setHeader('Allow', 'GET, POST')
      res.status(405).json({ message: '405 Method Not Allowed' })
      break
  }
}

const index = async (req, res) => {
  const notes = []

  try {
    const collectionRef = await firestore.collection('notes').get()
    collectionRef.forEach(doc => notes.push({ id: doc.id, ...doc.data() }))
    res.status(200).json(notes)
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}

const create = async (req, res) => {
  const { body } = req

  try {
    if (body) {
      const docRef = await firestore.collection('notes').add({
        title: body.title ?? '',
        content: body.content ?? '',
        color: body.color ?? '#FFFFFF'
      })

      const doc = await docRef.get()
      if (doc.exists) {
        res.status(200).json({ id: doc.id, ...doc.data() })
      } else {
        res.status(404).json({ message: '404 Not found' })
      }
      return
    }
    res.status(400).json({ message: 'No body with the request' })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}

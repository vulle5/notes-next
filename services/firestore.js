// This service is only for pages/api routes
import Firestore from '@google-cloud/firestore'

export default new Firestore({
  projectId: 'notes-next',
  keyFilename: 'C:/Users/sever/Code/notes-next/firestore-notes-next.json'
})

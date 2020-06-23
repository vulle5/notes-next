// This service is only for pages/api routes
const Firestore = require('@google-cloud/firestore')

export default new Firestore({
  projectId: 'notes-next',
  keyFilename: '/firestore-notes-next.json'
})

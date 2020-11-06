// This service is only for pages/api routes
import * as admin from 'firebase-admin'
import serviceAccount from 'firestore-notes-next.json'

// Only initialize app if there are no other apps running
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore()
const { auth } = admin

export { db, auth }

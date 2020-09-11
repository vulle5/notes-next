// This service is only for pages/api routes
import * as admin from 'firebase-admin'
// eslint-disable-next-line import/no-unresolved
import serviceAccount from 'firestore-notes-next.json'

// Only initialize app if there are no other apps running
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore()
const { auth } = admin

// eslint-disable-next-line import/prefer-default-export
export { db, auth }

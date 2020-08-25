import firebase from 'services/firebase-client'
import fetch from 'services/fetch'

// TODO: Reference /api/auth
const url = 'http://localhost:3000/api/auth'

const login = async (email, password) => {
  let error = null

  // Do not persist auth state on client side
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(({ user }) => user.getIdToken(true))
    // TODO: Handle CSRF
    .then(idToken => fetch(url, { method: 'POST', body: { idToken } }))
    // TODO: Redirect from login to home
    .then(() => true)
    .catch(err => {
      error = err
    })

  return error
}

const logout = async () => {
  let error = null

  firebase.auth().signOut()
    .catch(err => {
      error = err
    })

  return error
}

export default { login, logout }

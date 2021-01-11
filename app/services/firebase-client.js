import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAGTAkZV1mEevKg8wzuJG7CHzYaNs_XfS0',
    authDomain: 'notes-next.firebaseapp.com',
    databaseURL: 'https://notes-next.firebaseio.com',
    projectId: 'notes-next',
    storageBucket: 'notes-next.appspot.com',
    messagingSenderId: '564760630028',
    appId: '1:564760630028:web:f10757e1a8aaf122c1ef29',
    measurementId: 'G-2KGYRPLXBG'
  }
  firebase.initializeApp(config)
}

export default firebase

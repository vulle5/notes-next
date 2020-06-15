import * as firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBCP8_UYuIB1o9qwEozOcKjF4Z2nSi7IMk',
  authDomain: 'notes-e0481.firebaseapp.com',
  databaseURL: 'https://notes-e0481.firebaseio.com',
  projectId: 'notes-e0481',
  storageBucket: 'notes-e0481.appspot.com',
  messagingSenderId: '991874067641',
  appId: '1:991874067641:web:a5ae4b06eccf98846fbf68',
  measurementId: 'G-KFNKY19DGV'
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

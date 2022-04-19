import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDU8ok8EhgLrmeBxPyPE_c9kyKxZVmYr8c',
  authDomain: 'tinder-clone-8af3d.firebaseapp.com',
  projectId: 'tinder-clone-8af3d',
  storageBucket: 'tinder-clone-8af3d.appspot.com',
  messagingSenderId: '258600190631',
  appId: '1:258600190631:web:3ead3f852d47f92bfdd182',
  measurementId: 'G-H1FVTKYZ7K',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  // apiKey: 'AIzaSyANaM5QXG2N1aFDWlDZdRKep4YWHFb3xps',
  // authDomain: 'awesomeproject-2b852.firebaseapp.com',
  // databaseURL: 'https://awesomeproject-2b852-default-rtdb.firebaseio.com',
  // projectId: 'awesomeproject-2b852',
  // storageBucket: 'awesomeproject-2b852.appspot.com',
  // messagingSenderId: '309565828878',
  // appId: '1:309565828878:web:3aecc43a7416e60784f15f',

  apiKey: 'AIzaSyBWxZ9LqdwPzlHVynCOSYmsERAB9ITPxmo',
  authDomain: 'my-project-awesomeproject.firebaseapp.com',
  databaseURL:
    'https://my-project-awesomeproject-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'my-project-awesomeproject',
  storageBucket: 'my-project-awesomeproject.appspot.com',
  messagingSenderId: '764581109835',
  appId: '1:764581109835:web:111ea2e6ffeb805b36edce',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

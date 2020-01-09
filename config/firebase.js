import Firebase from 'firebase'
import 'firebase/firestore'

export const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyD1JIzYveYzlCrJQ0ECXu64OBTB8DZfbdI',
  authDomain: 'keyxpert-app.firebaseapp.com',
  databaseURL: 'https://keyxpert-app.firebaseio.com',
  projectId: 'keyxpert-app',
  storageBucket: 'keyxpert-app.appspot.com',
  messagingSenderId: '196251319993'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.firestore()
// export const db = firebaseApp.database()
export const auth = firebaseApp.auth()
export const storage = firebaseApp.storage()

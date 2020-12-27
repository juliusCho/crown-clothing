import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDu4qpbxblXRW5rX8d9u8A3E6SvNAwboj8',
  authDomain: 'crown-db-6e76e.firebaseapp.com',
  projectId: 'crown-db-6e76e',
  storageBucket: 'crown-db-6e76e.appspot.com',
  messagingSenderId: '226662902411',
  appId: '1:226662902411:web:8646977ced35638176428e',
  measurementId: 'G-V9EJEP9H2Y',
}

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any,
) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

import firebase from 'firebase'

// Required for side-effects
import 'firebase'

// Got from project console
const firebaseConfig = {
  apiKey: 'AIzaSyBIOg1jNx7LAvkh3JF_BSKED1GF0lPQV8E',
  authDomain: 'my-unsplash-challenge-64aa8.firebaseapp.com',
  projectId: 'my-unsplash-challenge-64aa8',
  storageBucket: 'my-unsplash-challenge-64aa8.appspot.com',
  messagingSenderId: '842636681249',
  appId: '1:842636681249:web:4419c92ba44955ded40360',
}

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const getPhotos = async () => {
  let photos = []
  const snapshot = await db.collection('photos').get()
  snapshot.forEach((doc) => photos.push({ id: doc.id, ...doc.data() }))
  return photos
}

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTjCuHNRFLVyCb3Mw0vPFfvjq9-ElWVeU",
    authDomain: "thedojosite-55032.firebaseapp.com",
    projectId: "thedojosite-55032",
    storageBucket: "thedojosite-55032.appspot.com",
    messagingSenderId: "427951118271",
    appId: "1:427951118271:web:b1636674f2ee00bf20b30a"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }
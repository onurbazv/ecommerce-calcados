import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADrZEgp5k-QgSBmoZPQjs1EX06RlAfu9I",
    authDomain: "netshoes-clone.firebaseapp.com",
    projectId: "netshoes-clone",
    storageBucket: "netshoes-clone.appspot.com",
    messagingSenderId: "107651677486",
    appId: "1:107651677486:web:2b17fcaa5918ea6c28cebf"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
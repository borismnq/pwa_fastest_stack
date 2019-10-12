import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyAS5IyidYM41lh22XqQRkSqBsFlsTBDUXo",
    authDomain: "bidinnovapwa.firebaseapp.com",
    databaseURL: "https://bidinnovapwa.firebaseio.com",
    projectId: "bidinnovapwa",
    storageBucket: "bidinnovapwa.appspot.com",
    messagingSenderId: "828343045072",
    appId: "1:828343045072:web:f505add11485feeada87d5",
    measurementId: "G-X8W8RBL3P6"
}

firebase.initializeApp(config)

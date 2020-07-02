import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAykSsQZRg9mcD2JudYckB_aRI1wzc73Xk",
    authDomain: "learning-ionic-e7914.firebaseapp.com",
    databaseURL: "https://learning-ionic-e7914.firebaseio.com",
    projectId: "learning-ionic-e7914",
    storageBucket: "learning-ionic-e7914.appspot.com",
    messagingSenderId: "694310864144",
    appId: "1:694310864144:web:83ce248822948836ce5195",
    measurementId: "G-ZX8G20LXKD"
};

firebase.initializeApp(firebaseConfig);

// Create reference
export const dbRefObject = firebase.database().ref().child('elements')
export const metalRef = dbRefObject.child('metals')
export const actinideRef = dbRefObject.child('actinide')
export const nobelGasRef = dbRefObject.child('nobelGas')
export const nonMetalRef = dbRefObject.child('nonmetals')
export const allElements = dbRefObject.child('symbols')

// Sync object/element Changes
// dbRefObject.on('value', snap => console.log(snap.val()))


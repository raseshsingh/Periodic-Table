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
// Get Element
const preObject = document.getElementById('object');

// Create reference
const dbRefObject = firebase.database().ref().child('elements')

// Sync object/element Changes
// dbRefObject.on('value', snap => console.log(snap.val()))


export function checkDatabase() {
// Get Element
    const preObject = document.getElementById('object');

// Create reference
    const dbRefObject = firebase.database().ref().child('elements').child('metals')

// Sync object/element Changes
    dbRefObject.on('value', snap => {
        // @ts-ignore
        preObject.innerText = JSON.stringify(snap.val(), null, 3)
        console.log(snap)
    })

}


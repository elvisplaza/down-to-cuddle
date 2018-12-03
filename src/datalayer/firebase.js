import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCSUQ9nHzitcftJGIDiMJn1qxBsu9JFW-0",
    authDomain: "cuddle-app-801f3.firebaseapp.com",
    databaseURL: "https://cuddle-app-801f3.firebaseio.com",
    projectId: "cuddle-app-801f3",
    storageBucket: "cuddle-app-801f3.appspot.com",
    messagingSenderId: "665243766057"
};
firebase.initializeApp(config);

export default firebase
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA8mNEeV_04HvOR9ueGLUMPxVDpUrBv0RE",
    authDomain: "base-app-3e6b5.firebaseapp.com",
    databaseURL: "https://base-app-3e6b5.firebaseio.com",
    projectId: "base-app-3e6b5",
    storageBucket: "base-app-3e6b5.appspot.com",
    messagingSenderId: "693229877778",
    appId: "1:693229877778:web:724dc87e58b771f4"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
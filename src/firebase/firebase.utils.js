import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBao5Qgpi6A37aD8hEVZAFG_TkwXWMMNJE",
    authDomain: "crown-db-c1b23.firebaseapp.com",
    databaseURL: "https://crown-db-c1b23.firebaseio.com",
    projectId: "crown-db-c1b23",
    storageBucket: "crown-db-c1b23.appspot.com",
    messagingSenderId: "227393977216",
    appId: "1:227393977216:web:5e0a15f26749750a5b9f65",
    measurementId: "G-TWP5Q2EC4B"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createAt = new Date();


        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
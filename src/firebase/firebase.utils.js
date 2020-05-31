import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgS0L8lf1tZUc14d-71Ez0DA9pcciNjy4",
    authDomain: "crwn-db-udemy-7c55d.firebaseapp.com",
    databaseURL: "https://crwn-db-udemy-7c55d.firebaseio.com",
    projectId: "crwn-db-udemy-7c55d",
    storageBucket: "crwn-db-udemy-7c55d.appspot.com",
    messagingSenderId: "709602424844",
    appId: "1:709602424844:web:e05e3009676339dcb99629",
    measurementId: "G-TKP3Y1DWN8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
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
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
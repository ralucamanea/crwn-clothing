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

firebase.initializeApp(config);

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

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
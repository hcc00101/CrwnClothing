import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4xXtJgVxAKLdGOqCXj68RJO8mkpEOujE",
    authDomain: "crwnclothing-70c06.firebaseapp.com",
    projectId: "crwnclothing-70c06",
    storageBucket: "crwnclothing-70c06.appspot.com",
    messagingSenderId: "77838982086",
    appId: "1:77838982086:web:92194c2bc83befab29f0c7",
    measurementId: "G-WM0NXZTTXX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error Creating User', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
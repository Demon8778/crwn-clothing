import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDzOjaLu90Ne9GQIb71r4_eet7toWu1-Mw',
	authDomain: 'crwn-db-67c1f.firebaseapp.com',
	databaseURL: 'https://crwn-db-67c1f.firebaseio.com',
	projectId: 'crwn-db-67c1f',
	storageBucket: '',
	messagingSenderId: '308003895700',
	appId: '1:308003895700:web:492158143736100ba1b781'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// console.log(userAuth);

	if (!userAuth) return;

	const userRef = firestore.doc(`/users/${userAuth.uid}`);
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
			console.log(`Error occured! Can't create user`, error.message);
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

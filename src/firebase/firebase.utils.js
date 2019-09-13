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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

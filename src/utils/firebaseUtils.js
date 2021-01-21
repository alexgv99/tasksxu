import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDmn35i-ZYgX-0davcqlzNrl7e46ZKrI7c',
	authDomain: 'tasksxu.firebaseapp.com',
	databaseURL: 'https://tasksxu.firebaseio.com',
	projectId: 'tasksxu',
	storageBucket: '',
	messagingSenderId: '347330965454',
	appId: '1:347330965454:web:f08ab5c643f5a0e1',
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

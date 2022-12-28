import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

export const TODO_LIST_APP_COLLECTION_NAME = 'todo-list';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'js-to-ts-todolist.firebaseapp.com',
  projectId: 'js-to-ts-todolist',
  storageBucket: 'js-to-ts-todolist.appspot.com',
  messagingSenderId: '79458857236',
  appId: process.env.FIREBASE_APP_ID,
  measurementId: 'G-23LKQEC7RV',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const todoListCollectionDocRef = collection(
  db,
  TODO_LIST_APP_COLLECTION_NAME
);

export default db;

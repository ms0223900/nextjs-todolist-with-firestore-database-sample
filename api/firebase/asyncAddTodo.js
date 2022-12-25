import { addDoc, serverTimestamp } from 'firebase/firestore';
import { todoListCollectionDocRef } from './firebase';

const asyncAddTodo = async ({ content, checked }) => {
  const docRef = await addDoc(todoListCollectionDocRef, {
    content,
    checked,
    created: serverTimestamp(), // serverTimestamp，建立去抓伺服器的時間
  });
  return docRef;
};

export default asyncAddTodo;

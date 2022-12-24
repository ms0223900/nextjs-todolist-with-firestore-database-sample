import { addDoc, serverTimestamp } from 'firebase/firestore';
import { todoListCollectionDocRef } from './firebase';

const asyncAddTodo = async ({ content, checked }) => {
  const docRef = await addDoc(todoListCollectionDocRef, {
    content,
    checked,
    created: serverTimestamp(),
  });
  return docRef;
};

export default asyncAddTodo;

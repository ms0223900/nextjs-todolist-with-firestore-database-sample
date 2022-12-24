import { deleteDoc } from 'firebase/firestore';
import getDocRef from './utils/getDocRef';

const asyncDeleteTodo = async (todoId = '') => {
  await deleteDoc(getDocRef([todoId]));
};

export default asyncDeleteTodo;

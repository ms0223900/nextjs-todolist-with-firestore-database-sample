import { updateDoc } from 'firebase/firestore';
import getDocRef from './utils/getDocRef';

const asyncUpdateTodo = async (todoId = '', payload = {}) => {
  const todoItemRef = getDocRef([todoId]);
  return await updateDoc(todoItemRef, payload);
};

export default asyncUpdateTodo;

import { SingleTodo } from 'api-types';
import { updateDoc } from 'firebase/firestore';
import getDocRef from './utils/getDocRef';

const asyncUpdateTodo = async (
  todoId: SingleTodo['id'],
  payload: Partial<SingleTodo>
) => {
  const todoItemRef = getDocRef([todoId]);
  return await updateDoc(todoItemRef, payload);
};

export default asyncUpdateTodo;

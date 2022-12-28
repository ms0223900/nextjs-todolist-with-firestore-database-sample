import { SingleTodo } from 'api-types';
import makeUuid from './makeUuid';

const makeInitTodoItem = (options: Partial<SingleTodo>) => ({
  id: makeUuid(),
  checked: false,
  content: '',
  ...options,
});

export default makeInitTodoItem;

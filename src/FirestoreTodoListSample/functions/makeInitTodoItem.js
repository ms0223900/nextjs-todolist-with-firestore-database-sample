import makeUuid from './makeUuid';

const makeInitTodoItem = (options = {}) => ({
  id: makeUuid(),
  checked: false,
  content: '',
  ...options,
});

export default makeInitTodoItem;

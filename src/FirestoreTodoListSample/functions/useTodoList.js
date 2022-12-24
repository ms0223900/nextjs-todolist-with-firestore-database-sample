import { useCallback, useEffect, useMemo, useState } from 'react';
import makeInitTodoItem from './makeInitTodoItem';

const useTodoList = ({ initTodoListData = [] }) => {
  const [todoList, setTodoList] = useState(initTodoListData);

  const handleAddTodo = useCallback(async (content = 'Default Content') => {
    // create api
    //...
    setTodoList((_todoList) => [
      ..._todoList,
      makeInitTodoItem({
        // id:
        content,
      }),
    ]);
  }, []);

  const handleEditTodo = useCallback(
    (key = 'checked') =>
      (id = '') =>
      async (value) => {
        setTodoList((_todoList) => {
          // update api
          //...
          const matchedIdx = _todoList.findIndex((t) => t.id === id);
          if (matchedIdx === -1) return _todoList;
          const newTodoList = [..._todoList];
          newTodoList[matchedIdx][key] = value;
          return newTodoList;
        });
      },
    []
  );

  const handleToggleChecked = useMemo(() => handleEditTodo('checked'), []);

  const handleEditTodoContent = useMemo(() => handleEditTodo('content'), []);

  const handleDeleteTodo = useCallback(async (id = '') => {
    setTodoList((_todoList) => {
      // delete api
      //...
      return _todoList.filter((t) => t.id !== id);
    });
  }, []);

  useEffect(() => {
    // read api
    // setTodoList();
  }, []);

  return {
    todoList,
    handleAddTodo,
    handleEditTodo: handleEditTodoContent,
    handleDeleteTodo,
    handleToggleChecked,
  };
};

export default useTodoList;

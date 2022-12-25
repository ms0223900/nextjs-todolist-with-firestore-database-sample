import { use, useCallback, useEffect, useMemo, useState } from 'react';
import makeInitTodoItem from './makeInitTodoItem';
import asyncAddTodo from '../../../api/firebase/asyncAddTodo';
import asyncUpdateTodo from '../../../api/firebase/asyncUpdateTodo';
import asyncGetTodoList from '../../../api/firebase/asyncGetTodoList';
import asyncDeleteTodo from '../../../api/firebase/asyncDeleteTodo';
import useQuery from '../../utils/hooks/useQuery';

const useTodoList = ({ initTodoListData = [] }) => {
  // 似乎React18的use() API還沒開放使用...
  // const fetchedTodoListData = use(asyncGetTodoList());

  const [todoList, setTodoList] = useState(initTodoListData);
  // 改用useQuery的custom hook 來取得todo清單資料
  useQuery(asyncGetTodoList, setTodoList);

  const handleAddTodo = useCallback(async (content = 'Default Content') => {
    // create api
    const addedRes = await asyncAddTodo({
      content,
      checked: false,
    });
    setTodoList((_todoList) => [
      ..._todoList,
      makeInitTodoItem({
        id: addedRes.id,
        content,
      }),
    ]);
  }, []);

  const handleEditTodo = useCallback(
    (key = 'checked') =>
      (id = '') =>
      async (value) => {
        // update api
        //...
        if (key === 'checked') {
          await asyncUpdateTodo(id, {
            [key]: value,
          });
        }
        setTodoList((_todoList) => {
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
    try {
      await asyncDeleteTodo(id);
      setTodoList((_todoList) => {
        return _todoList.filter((t) => t.id !== id);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // 原本是用useEffect，但優化改用useQuery的方式fetch資料，詳見useQuery的custom hook
  // useEffect(() => {
  //   // read api
  //   (async () => {
  //     const todoList = await asyncGetTodoList();
  //     setTodoList(todoList);
  //   })();
  // }, []);

  return {
    todoList,
    handleAddTodo,
    handleEditTodo: handleEditTodoContent,
    handleDeleteTodo,
    handleToggleChecked,
  };
};

export default useTodoList;

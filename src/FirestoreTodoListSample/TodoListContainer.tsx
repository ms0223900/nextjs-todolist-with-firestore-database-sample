import React, { memo } from 'react';
import useTodoList from './functions/useTodoList';
import TodoList from './TodoList';
import { TodoListContainerProps } from './types';

const TodoListContainer = ({
  initTodoListData = [],
}: TodoListContainerProps) => {
  const {
    todoList,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleToggleChecked,
  } = useTodoList({ initTodoListData });

  return (
    <div>
      <TodoList
        todoListData={todoList}
        onAddTodo={handleAddTodo}
        onToggleChecked={handleToggleChecked}
        onChangeContent={handleEditTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default memo(TodoListContainer);

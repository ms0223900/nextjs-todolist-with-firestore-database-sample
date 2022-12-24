import React, { memo } from 'react';
import useTodoList from './functions/useTodoList';
import TodoList from './TodoList';

const TodoListContainer = ({ initTodoListData = [] }) => {
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
        onChangeTodoContent={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default memo(TodoListContainer);

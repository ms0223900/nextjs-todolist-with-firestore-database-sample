import { AddOutlined, EditOutlined } from '@mui/icons-material';
import { Button, Paper } from '@mui/material';
import React, { memo } from 'react';
import TodoItem from './TodoItem';
import styles from './todo-list.module.css';

const TodoList = ({
  todoListData = [],
  onAddTodo,
  onToggleChecked,
  onChangeTodoContent,
  onDeleteTodo,
}) => {
  return (
    <Paper className={styles['todo-list--wrapper']}>
      <h2>TodoList App | 代辦事項App</h2>
      {todoListData.map((t) => (
        <TodoItem
          key={t.id}
          {...t}
          onToggleChecked={onToggleChecked}
          onChangeContent={onChangeTodoContent}
          onDelete={onDeleteTodo}
        />
      ))}
      <Button
        onClick={() => {
          onAddTodo();
        }}
      >
        <AddOutlined />
      </Button>
    </Paper>
  );
};

export default memo(TodoList);

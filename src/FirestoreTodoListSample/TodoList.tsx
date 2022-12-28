import { AddOutlined, EditOutlined } from '@mui/icons-material';
import { Button, Paper } from '@mui/material';
import React, { memo } from 'react';
import TodoItem from './TodoItem';
import styles from './todo-list.module.css';
import { TodoListProps } from './types';

const TodoList = ({
  todoListData = [],
  onAddTodo,
  onToggleChecked,
  onChangeContent,
  onDelete,
}: TodoListProps) => {
  return (
    <Paper className={styles['todo-list--wrapper']}>
      <h2>TodoList App | 代辦事項App</h2>
      {todoListData.map((t) => (
        <TodoItem
          key={t.id}
          {...t}
          onToggleChecked={onToggleChecked}
          onChangeContent={onChangeContent}
          onDelete={onDelete}
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

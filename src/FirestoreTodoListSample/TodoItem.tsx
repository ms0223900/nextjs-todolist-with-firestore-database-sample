import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Box, Button, Checkbox, TextField } from '@mui/material';
import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import asyncUpdateTodo from '../../api/firebase/asyncUpdateTodo';
import useToggle from './functions/useToggle';
import { TodoItemProps } from './types';

const TodoItem = ({
  id,
  checked,
  content,
  onToggleChecked,
  onDelete,
  onChangeContent,
}: TodoItemProps) => {
  const prevContent = useRef(content);
  const { toggle: isEditing, setToggle, handleToggle } = useToggle();
  const handleEditContent = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeContent(id)(e.currentTarget.value);
    },
    [id]
  );
  const handleToggleChecked = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onToggleChecked(id)(e.currentTarget.checked);
    },
    [id]
  );

  const handleAsyncSaveContent = useCallback(async () => {
    if (prevContent.current === content) return setToggle(false);
    // api
    await asyncUpdateTodo(id, {
      content,
    });
    setToggle(false);
    prevContent.current = content;
  }, [id, content]);

  useEffect(() => {
    prevContent.current = content;
  }, []);

  return (
    <Box display={'flex'} alignItems={'center'}>
      <Checkbox checked={checked} onChange={handleToggleChecked} />
      <div
        onDoubleClick={async () => {
          isEditing ? await handleAsyncSaveContent() : setToggle(true);
        }}
      >
        {isEditing ? (
          <TextField
            autoFocus={true}
            value={content}
            onChange={handleEditContent}
            onBlur={handleAsyncSaveContent}
          />
        ) : (
          <p>{content}</p>
        )}
      </div>
      <Button onClick={() => onDelete(id)}>
        <DeleteOutlineOutlined />
      </Button>
    </Box>
  );
};

export default memo(TodoItem);

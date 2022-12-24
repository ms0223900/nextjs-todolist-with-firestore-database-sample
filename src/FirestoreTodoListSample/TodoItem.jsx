import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Box, Button, Checkbox, TextField } from '@mui/material';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import useToggle from './functions/useToggle';

const TodoItem = ({
  id,
  checked,
  content,
  onToggleChecked,
  onDelete,
  onChangeContent,
}) => {
  const prevContent = useRef(content);
  const { toggle: isEditing, setToggle, handleToggle } = useToggle();
  const handleEditContent = useCallback(
    (e) => {
      onChangeContent(id)(e.currentTarget.value);
    },
    [id]
  );
  const handleToggleChecked = useCallback(
    (e) => {
      onToggleChecked(id)(e.currentTarget.checked);
    },
    [id]
  );

  const handleAsyncSaveContent = useCallback(async () => {
    if (prevContent.current === content) return setToggle(false);
    // api
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

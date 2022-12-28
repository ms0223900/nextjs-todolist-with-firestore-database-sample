import { SingleTodo } from 'api-types';
import { Callback } from 'common-types';

export interface TodoListProps extends TodoItemProps {
  todoListData: SingleTodo[];
  onAddTodo: Callback;
}

export interface TodoListContainerProps {
  initTodoListData?: SingleTodo[];
}

export interface TodoItemProps extends SingleTodo {
  onToggleChecked: (
    id: SingleTodo['id']
  ) => (checked: SingleTodo['checked']) => any;
  onChangeContent: (
    id: SingleTodo['id']
  ) => (content: SingleTodo['content']) => any;
  onDelete: (id: SingleTodo['id']) => any;
}

export interface UseTodoListOptions extends TodoListContainerProps {}

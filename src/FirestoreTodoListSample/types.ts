import { SingleTodo } from 'api-types';
import { Callback } from 'common-types';

export interface TodoItemProps extends SingleTodo {
  onToggleChecked: (
    id: SingleTodo['id']
  ) => (checked: SingleTodo['checked']) => any;
  onChangeContent: (
    id: SingleTodo['id']
  ) => (content: SingleTodo['content']) => any;
  onDelete: (id: SingleTodo['id']) => any;
}

export interface TodoListProps
  extends Pick<
    TodoItemProps,
    'onToggleChecked' | 'onChangeContent' | 'onDelete'
  > {
  todoListData: SingleTodo[];
  onAddTodo: Callback;
}

export interface TodoListContainerProps {
  initTodoListData?: SingleTodo[];
}

export interface UseTodoListOptions extends TodoListContainerProps {}

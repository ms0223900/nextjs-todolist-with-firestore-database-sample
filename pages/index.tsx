import Head from 'next/head';
import TodoListContainer from '../src/FirestoreTodoListSample/TodoListContainer';

export default function TodoPage() {
  return (
    <>
      <Head>
        <title>{'Firestore Database Todo List Sample'}</title>
      </Head>
      <main
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eee',
        }}
      >
        <TodoListContainer initTodoListData={[]} />
      </main>
    </>
  );
}

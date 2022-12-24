import { getDocs, orderBy, query } from 'firebase/firestore';
import { todoListCollectionDocRef } from './firebase';

const asyncGetTodoList = async (
  queryConstraints = [orderBy('created', 'asc')]
) => {
  const q = query(todoListCollectionDocRef, ...queryConstraints);
  const docSnap = await getDocs(q);

  const res = docSnap.docs.map((doc) => ({
    ...doc.data(),
    created: JSON.stringify(doc.data().created),
    id: doc.id,
  }));
  return res;
};
export default asyncGetTodoList;

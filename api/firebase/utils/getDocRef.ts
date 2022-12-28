import { doc } from 'firebase/firestore';
import db, { TODO_LIST_APP_COLLECTION_NAME } from '../firebase';

const getDocRef = (pathSegments: string[] = []) =>
  doc(db, TODO_LIST_APP_COLLECTION_NAME, ...pathSegments);

export default getDocRef;
